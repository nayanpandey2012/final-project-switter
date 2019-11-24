import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Advertisement from '../src/components/advertisement';
import SigninTab from '../src/components/signinTab';
import Login from './pages/LoginPage.jsx';
import switterLogo from '../src/csc667-logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sign_up from './pages/Sign_up';
import './pages/Logged_in_main'

import Logged_in_main from './pages/Logged_in_main';


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
        <Switch>
          <Route path='/login' component={Login} />
          <Route exact path='/' component={Home} />
          <Route path= '/signin' component = {Advertisement}/>
          <Route path = '/' component= {SigninTab}/>
          <Route path = '/sign_up' component= {Sign_up}/>
        </Switch>
        </div>
    <div>
      <Logged_in_main />
    </div>
    </Router>

      </div>

    

  );
}

export default App;
