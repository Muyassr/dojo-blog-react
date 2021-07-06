const BlogList = (probs) => {
    let blogs = probs.blogs;
    return ( 
        <div className="blog-list">
              {blogs.map((blogX)=>(
               <div className="blog-preview" key={blogX.id}>
                   <h2>{blogX.title}</h2>
                   <h5>writter by {blogX.author}</h5>
               </div>
            ))}
        </div>
     );
}
 
export default BlogList;