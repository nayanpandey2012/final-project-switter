import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from '../src/pages/Login';

const Home = () => {
  return (
    <div>
      <Link to='/login'><button>Login</button></Link>
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
