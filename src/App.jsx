import { useState } from 'react'
import './App.css'

export default function App() {

  const articles = [
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

  const [initialArticles, setinitialArticles] = useState(articles)

  return (
    <>
      <header>
        <h1 className='text-center fw-bold my-3'>Future article</h1>
      </header>

      <main>
        <div className="container">
          <div className="card">
            <div className="card-header text-center fw-bold">
              <h3>MY ARTICLE</h3>
            </div>
            <ul className='list-group list-group-flush '>
              {
                initialArticles.map(article => (
                  <li className='list-group-item list-unstyled d-flex justify-content-between align-items-center py-3' key={article.id}>
                    <p>{article.titolo}</p>
                    <button className='btn btn-danger'>
                      <i class="bi bi-trash"></i>
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
