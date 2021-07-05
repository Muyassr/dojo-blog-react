import {useState} from 'react';

const Home = () => {

   const [name, setname] = useState('Moyasr');
   const [age, setage] = useState(33)
   const handleClick = () => {
        setname('razan')
        setage(31);
   }

    
   return (
        <div className="home">
            <h2>Homepage</h2>
            <h3>{name} is {age}</h3>
            <button onClick={handleClick}>click me</button>
        </div>
    );
}
 
export default Home;