function BlogCard({ blog, onDelete }) {

    return (
        <div className="card">
            <div className="blog-title">
                <h2>{blog.title}</h2>
            </div>
            <div className="content">
                <p>{blog.content}</p>
            </div>
            <button className="delete-btn"
                onClick={() => onDelete(blog.id)}>
                Delete</button>
        </div>
    );
}

export default BlogCard