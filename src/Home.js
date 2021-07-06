import {useState} from 'react';
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title: 'tit1', body:'sksksk1', author: 'Moyasr', id:'1'},
        {title: 'tit2', body:'sksksk2', author: 'ali', id:'2'},
        {title: 'tit3', body:'sksksk3', author: 'Mohammed', id:'3'}
    ]);

   return (
        <div className="home">
          <BlogList blogs={blogs} title="All blogs"></BlogList>
        </div>
    );
}
 //jhehehehe
export default Home;