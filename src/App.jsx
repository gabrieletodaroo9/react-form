import { useState } from 'react'
import './App.css'

export default function App() {

  const initialArticles = [
    {
      "id": 1,
      "titolo": "Introduzione a JavaScript Moderno"
    },
    {
      "id": 2,
      "titolo": "Le 10 Migliori Pratiche di Sviluppo Web nel 2025"
    },
    {
      "id": 3,
      "titolo": "Come Ottimizzare le Prestazioni di un Database SQL"
    },
    {
      "id": 4,
      "titolo": "Guida Completa ai Framework CSS Popolari"
    },
    {
      "id": 5,
      "titolo": "Il Futuro dell'Intelligenza Artificiale e il Machine Learning"
    }
  ]

  const [articlesList, setArticlesList] = useState(initialArticles)
  const [newArticleTitle, setNewArticleTitle] = useState("")
  const [idInEdit, setIdInEdit] = useState(null)
  const [currentEditTitle, setCurrentEditTitle] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const newArticle = {
      id: `${newArticleTitle.toLowerCase().split(" ").join("")}${articlesList.length + 1}`,
      titolo: newArticleTitle
    }

    if (newArticleTitle.length > 0) {
      setArticlesList(articlesList => [...articlesList, newArticle])
      setNewArticleTitle("")
    } else {
      alert("Scrivi qualcosa nel form")
    }
  }

  function handleDelete(idToDelete) {
    const filteredArticle = articlesList.filter(article => idToDelete !== article.id)
    setArticlesList(filteredArticle)
  }

  function handleModify(idModified) {
    const articleToEdit = articlesList.find(article => article.id === idModified)
    if (articleToEdit) {
      setIdInEdit(idModified)
      setCurrentEditTitle(articleToEdit.titolo)
    }
  }

  function handleSave(e) {
    e.preventDefault()
    if (currentEditTitle.trim() == 0) {
      alert("Il campo non può restare vuoto")
    } else {
      const modifiedList = articlesList.map(article => {
        if (article.id === idInEdit) {
          return { ...article, titolo: currentEditTitle }
        }
        return article
      })
      setArticlesList(modifiedList)
      setIdInEdit(null)
      setCurrentEditTitle("")
    }
  }

  return (
    <>
      <header>
        <h1 className='text-center fw-bold py-4'>MY JOURNAL</h1>
      </header>

      <main>
        <div className="container">
          <form onSubmit={handleSubmit} className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Add article title.." aria-label="article-title" aria-describedby="button-add-article" value={newArticleTitle} onChange={e => setNewArticleTitle(e.target.value)} />
            <button className="btn btn-success" type="submit" id="btn-add-article">Add</button>
          </form>
          {articlesList.length > 0 &&
            <div className="card">
              <div className="card-header text-center fw-bold">
                <h3>My article</h3>
              </div>
              <ul className='list-group list-group-flush '>

                {articlesList.map(article => (
                  <li className='list-group-item list-unstyled d-flex justify-content-between align-items-center' key={article.id}>
                    {idInEdit == article.id ? (
                      <form onSubmit={handleSave} className='input-group py-3'>
                        <input type="text" className='form-control' placeholder='Modifica..' value={currentEditTitle} onChange={e => setCurrentEditTitle(e.target.value)} />
                        <button className='btn btn-success text-white' type='submit'>
                          <i class="bi bi-check"></i>
                        </button>
                      </form>
                    ) : (
                      <>
                        <p className='mb-0 py-3 '>{article.titolo}</p>
                        <div>
                          <button className='btn btn-warning me-2 text-white' onClick={() => handleModify(article.id)}>
                            <i className="bi bi-pencil-fill"></i>
                          </button>
                          <button className='btn btn-danger' onClick={() => handleDelete(article.id)}>
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </>)}
                  </li>
                ))}

              </ul>
            </div>
          }
          {
            articlesList.length == 0 &&
            <h3 className='text-center text-dark mt-5'>Al momento non ci sono articoli nella lista!</h3>
          }
        </div>
      </main>
    </>
  )
}
