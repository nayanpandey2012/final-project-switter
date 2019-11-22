import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from '../src/pages/Login';
// import LoginAdvert from '../src/components/login_advert';

const Home = () => {
  return (
    <div>
      <p>Fake home</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
  <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
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
