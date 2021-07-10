import { Link } from "react-router-dom"

const NotFound = () => {
    
    return ( 

        <div className="not-found">
            <h3>sorry the page is not found</h3>
            <button ></button>
            <Link to="/"> go to home</Link>
        </div>

     );
}
 
export default NotFound;