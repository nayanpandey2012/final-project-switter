import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sign_up from './pages/Sign_up';
import './pages/Logged_in_main'
import switterLogo from './csc667-logo.svg';

import Logged_in_main from './pages/Logged_in_main';



function App() { // I just have logged_in_main for testing, this should be replaced later
  return (

    <Router>
      <h1>First Page</h1>
      <div>
        <nav>
          <ul>
           
            <li>
              <Link to="/sign_up">Sign Up</Link>
            </li>
            </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          
          <Route path="/sign_up">
            <Sign_up />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
