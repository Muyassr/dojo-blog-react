import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState();
    var [body, setBody] = useState();
    var [author, setAuthor] = useState('mario');
    const [isPending, setisPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = {title,body,author};

        setisPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(newBlog)
        }).then(()=> {
            setTimeout(() => {
                console.log("new blog added")
                setisPending(false);
                history.push('/');
            }, 1000);
        })
    }
    return ( 
        <div className="create">
            <h2>create new Blog</h2>
            <form onSubmit={handleSubmit}>  
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button type="submit">Add Blog</button> }
                { isPending && <button type="submit" disabled style={{background:'grey'}}>Adding Blog...</button> }
               
            </form>
        </div>

     );
}
 
export default Create;