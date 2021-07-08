
import BlogList from "./BlogList";
import UseFetch from './useFetch';

const Home = () => {
   const {data:blogs, isPending, error} = UseFetch('http://localhost:8000/blogs');
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