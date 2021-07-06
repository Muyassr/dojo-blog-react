import {useState, useEffect} from 'react';
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title: 'tit1', body:'sksksk1', author: 'Moyasr', id:'1'},
        {title: 'tit2', body:'sksksk2', author: 'ali', id:'2'},
        {title: 'tit3', body:'sksksk3', author: 'Moyasr', id:'3'}
    ]);

    const [name, setName] = useState('Ali');

    let deleteBlog = (blogId) => {
        let newBlogs = blogs.filter(x=>x.id!=blogId);
        setBlogs(newBlogs);
    }

    useEffect(()=> {
        alert('useeffect !')
    },[name]);

   return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" deleteBlog={deleteBlog}></BlogList>
            <BlogList blogs={blogs.filter(blogX=>blogX.author=='Moyasr')} title="Moyasr's blogs" deleteBlog={deleteBlog}></BlogList>

            <button onClick={()=> setName('Mostafa')}>change name</button>
            <h2>{name}</h2>
        </div>
    );
}

export default Home;