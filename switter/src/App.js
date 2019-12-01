import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sign_up from './pages/Sign_up';
import WelcomePage from './pages/WelcomePage';
import Logged_in_main from './pages/Logged_in_main';
import ProfilePage from './pages/ProfilePage';
import { connect } from 'react-redux';
import { setIsLoggedIn } from './redux/actions/userActions';
import Axios from 'axios';

const App = ({ isLoggedIn, dispatch }) => {

  // useEffect here will need to check auth server if previously signed in

  return (
    <div className="App">
      <Router>
        <div>
          <div>
            <Switch>
              <Route path='/profile' component={ProfilePage}>
                {isLoggedIn ? <Redirect to="/profile" /> : <LoginPage />}
                </Route>
              <Route path='/welcome' component={WelcomePage}>
                {isLoggedIn ? <Redirect to="/welcomePage" /> : <LoginPage />}
              </Route>
              <Route path='/signup' component={WelcomePage}>
                {isLoggedIn ? <Redirect to="/welcomePage" /> : <Sign_up />}
              </Route>
              <Route path='/login' component={WelcomePage}>
                {isLoggedIn ? <Redirect to="/welcomePage" /> : <LoginPage />}
              </Route>
              <Route path='/' component={Logged_in_main}>
                {isLoggedIn ? <Redirect to="/" /> : <LoginPage />}
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(mapStateToProps)(App);