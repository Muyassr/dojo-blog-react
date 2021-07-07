import Home from './Home';
import Navbar from './Navbar';
import Create from './create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/create'>
              <Create></Create>
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
