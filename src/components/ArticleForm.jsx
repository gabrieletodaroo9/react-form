export default function ArticleForm({ newArticleTitle, setNewArticleTitle, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Add article title.." aria-label="article-title" aria-describedby="button-add-article" value={newArticleTitle} onChange={e => setNewArticleTitle(e.target.value)} />
            <button className="btn btn-success" type="submit" id="btn-add-article">Add</button>
        </form>
    )
}