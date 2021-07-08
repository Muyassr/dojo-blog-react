import { Link }  from 'react-router-dom';

const BlogList = ({blogs, title}) => {
    // let blogs = probs.blogs;
    // let title = probs.title;
    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blogX)=>(
                <div className="blog-preview" key={blogX.id}>
                    <Link to={`blogs/${blogX.id}`}>
                        <h2>{blogX.title}</h2>
                        <h5>writter by {blogX.author}</h5>
                    </Link>
               </div>
            ))}
        </div>
     );
}
 
export default BlogList;