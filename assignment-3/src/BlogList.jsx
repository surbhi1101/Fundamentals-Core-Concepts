import BlogCard from "./BlogCard";
function BlogList({ blogs, onDelete }) {
    return (
        <div className="container">
            {blogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    blog={blog}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default BlogList