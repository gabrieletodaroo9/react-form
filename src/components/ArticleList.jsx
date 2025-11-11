export default function ArticleList({ articlesList, onDelete, onModify, onSave, currentEditTitle, onCurrentEditTitle, idInEdit }) {
    return (
        <>
            {articlesList.length !== 0 &&
                <div className="card">
                    <div className="card-header text-center fw-bold">
                        <h3>My article</h3>
                    </div>
                    <ul className='list-group list-group-flush '>

                        {articlesList.map(article => (
                            <li className='list-group-item list-unstyled d-flex justify-content-between align-items-center' key={article.id}>
                                {idInEdit === article.id ? (
                                    <form onSubmit={onSave} className='input-group py-3'>
                                        <input type="text" className='form-control' placeholder='Modifica..' value={currentEditTitle} onChange={e => onCurrentEditTitle(e.target.value)} />
                                        <button className='btn btn-success text-white' type='submit'>
                                            <i className="bi bi-check"></i>
                                        </button>
                                    </form>
                                ) : (
                                    <>
                                        <p className='mb-0 py-3 '>{article.titolo}</p>
                                        <div>
                                            <button className='btn btn-warning me-2 text-white' onClick={() => onModify(article.id)}>
                                                <i className="bi bi-pencil-fill"></i>
                                            </button>
                                            <button className='btn btn-danger' onClick={() => onDelete(article.id)}>
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
                articlesList.length === 0 &&
                <h3 className='text-center text-dark mt-5'>Al momento non ci sono articoli nella lista!</h3>
            }
        </>
    )
}