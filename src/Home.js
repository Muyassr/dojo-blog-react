import {useState} from 'react';

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title: 'tit1', body:'sksksk1', author: 'Moyasr', id:'1'},
        {title: 'tit2', body:'sksksk2', author: 'ali', id:'2'},
        {title: 'tit3', body:'sksksk3', author: 'Mohammed', id:'3'}
    ]);

   return (
        <div className="home">
            {blogs.map((blogX)=>(
               <div className="blog-preview" key={blogX.id}>
                   <h2>{blogX.title}</h2>
                   <h5>writter by {blogX.author}</h5>
               </div>
            ))}
        </div>
    );
}
 
export default Home;