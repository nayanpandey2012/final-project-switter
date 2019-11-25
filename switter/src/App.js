import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './pages/LoginPage.jsx';
import switterLogo from '../src/csc667-logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sign_up from './pages/Sign_up';
// import './pages/Logged_in_main';
import Logged_In_Main from './pages/Logged_In_Main';


const Home = () => {
  return (
    <div>
      <Link to='/login'><img src={switterLogo} width='40px' height='40px' alt='logo' /></Link>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div>
            <Switch>
              <Route path='/login' component={Login} />
              <Route exact path='/' component={Logged_In_Main} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
