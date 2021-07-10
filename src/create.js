import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState();
    var [body, setBody] = useState();
    var [author, setAuthor] = useState('mario');
   
    return ( 
        <div className="create">
            <h2>create new Blog</h2>
            <form>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
                <h4>{title}</h4>
                <h4>{body}</h4>
                <h4>{author}</h4>
            </form>
        </div>

     );
}
 
export default Create;