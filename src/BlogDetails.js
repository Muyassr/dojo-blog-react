import { useParams } from "react-router-dom";
import UseFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isPending, error} = UseFetch('http://localhost:8000/blogs/'+id);
    return ( 

        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ... </div> } 
            {blog && (
                <article>
                    <h2>{blog.title}</h2> 
                    <h6>{blog.author}</h6> 
                    <br></br>
                    <p>{blog.body}</p> 
                    {/* <p>{blog.body}</p> */}
                </article>
                
            )}
            
        </div>
     );
}
 
export default BlogDetails;