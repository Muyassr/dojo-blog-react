const Home = () => {
   const handleClick = (e) => {
       console.log(e)
   }

   const handleClick2 = (name) => {
    alert('hello '+name)
}
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>click me</button>
            <button onClick={()=>handleClick2('Moyasr')}>click name</button>
        </div>
    );
}
 
export default Home;