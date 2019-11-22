import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from '../src/pages/Login';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer, faCoffee, faWineGlassAlt, faStroopwafel, faAppleAlt, faCookie, faCheckSquare as fasCheckSquare} from '@fortawesome/free-solid-svg-icons'
import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons'
library.add(
  fab,
  farSquare,
  faBeer,
  faCoffee,
  faWineGlassAlt,
  faStroopwafel,
  faAppleAlt,
  faCookie,
  fasCheckSquare,
  farCheckSquare
)

const Home = () => {
  return (
    <div>
      <br />
      <Link to='/login'><FontAwesomeIcon icon={['fas', 'check-square']} /></Link>
      <br />
      <br />
      <FontAwesomeIcon icon={['far', 'check-square']} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
  <Router>
      <div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
