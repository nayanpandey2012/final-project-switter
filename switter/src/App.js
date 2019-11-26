import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sign_up from './pages/Sign_up';
import WelcomePage from './pages/WelcomePage';
import Logged_in_main from './pages/Logged_in_main';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <div>
            <Switch>
              <Route path='/profile' component={ProfilePage} />
              <Route path='/welcome' component={WelcomePage} />
              <Route path='/signup' component={Sign_up} />
              <Route path='/login' component={LoginPage} />
              <Route exact path='/' component={Logged_in_main} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;