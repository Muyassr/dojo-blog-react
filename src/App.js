import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route path='/'>
              <Home></Home>
            </Route>
            <Route path='/ss'> <h2>sssdd</h2></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
