import {useState, useEffect} from 'react';
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
       setTimeout(() => {
           fetch('http://localhost:8000/blogs').then(res => {
               if (!res.ok) {
                   throw Error('could not fetch from the resource..');
               }
               return res.json();
           }).then(data => {
                setBlogs(data);
                setisPending(false);
                setError(null);
            }).catch(err=> {
                setError(err.message);
                setisPending(false);
           });
       }, 1000); 
    },[]);
// heeeee
   return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ... </div> } 
            {blogs && <BlogList blogs={blogs} title="All blogs"></BlogList>}
        </div>
    );
}

export default Home;