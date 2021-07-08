import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();

    return ( 

        <div className="blog-details">
            <h2>blogs name {id} </h2>
            <p>blog content bla bla bla</p>
        </div>
     );
}
 
export default BlogDetails;