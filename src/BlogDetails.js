import { useParams } from "react-router-dom";
import UseFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isPending, error} = UseFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();
    
    const deleteHandle = ()=> {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
            headers: {"Content-type": "application/json"},
        }).then(()=> {
            history.push('/');
        });
    }

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
                  
                    <button onClick={ deleteHandle }>delete</button>

                </article>
                
            )}
            
        </div>
     );
}
 
export default BlogDetails;