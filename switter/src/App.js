import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './pages/LoginPage.jsx';
import switterLogo from '../src/csc667-logo.svg';

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
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
