const BlogList = ({blogs, title}) => {

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{title}</h2>
          <p>Author</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
