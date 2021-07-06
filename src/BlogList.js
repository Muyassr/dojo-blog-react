const BlogList = ({blogs, title, deleteBlog}) => {
    // let blogs = probs.blogs;
    // let title = probs.title;
    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blogX)=>(
                <div className="blog-preview" key={blogX.id}>
                   <h2>{blogX.title}</h2>
                   <h5>writter by {blogX.author}</h5>
                   <button onClick={()=>deleteBlog(blogX.id)}>delete blog</button>
               </div>
            ))}
        </div>
     );
}
 
export default BlogList;