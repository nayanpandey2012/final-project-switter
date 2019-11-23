import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sign_up from './pages/Sign_up';
import './pages/Logged_in_main'
import switterLogo from './csc667-logo.svg';

import Logged_in_main from './pages/Logged_in_main';



function App() {
  return (

    <Router>
      <h1>First Page</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/sign_up">Sign Up</Link>
            </li>
            <li>
              <Link to="/logged_in_main">This link is to test the logged_in_main</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          
          <Route path="/sign_up">
            <Sign_up />
          </Route>
          <Route path="/logged_in_main">
            <Logged_in_main />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
