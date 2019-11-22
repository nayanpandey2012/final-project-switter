import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './pages/LoginPage';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (
    <div>
      <br />
      <Link to='/login'><FontAwesomeIcon icon={faHome} /></Link>
      <br />
      <FontAwesomeIcon icon={['far', 'comment']} />
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
