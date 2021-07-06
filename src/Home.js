import {useState, useEffect} from 'react';
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);

    const [isPending, setisPending] = useState(true);

    useEffect(()=> {
       setTimeout(() => {
           fetch('http://localhost:8000/blogs').then(res => {
               return res.json();
           }).then(data => {
                console.log(data);
                setBlogs(data);
                setisPending(false);
           });
       }, 1000); 
    },[]);

   return (
        <div className="home">
            {isPending && <div>Loading ... </div> } 
            {blogs && <BlogList blogs={blogs} title="All blogs"></BlogList>}
        </div>
    );
}

export default Home;