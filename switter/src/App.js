import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx';
import SignUp from './pages/SignUp';
import WelcomePage from './pages/WelcomePage';
import Logged_in_main from './pages/Logged_in_main';
import ProfilePage from './pages/ProfilePage';
import { connect } from 'react-redux';
import selector from './selectors';

const App = ({ isLoggedIn }) => {
  
  return (
    <div className="App">
      <Router>
        <div>
          <Link to='/'></Link>
        </div>
        {isLoggedIn && (
          <div>
            <Link to='/profile'></Link>
          </div>
        )}
        <Switch>
          <Route path='/profile' component={ProfilePage} />
          <Route path='/welcome' component={WelcomePage} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LoginPage} />
          <Route exact path='/' component={Logged_in_main} />
        </Switch>
      </Router>
    </div>
  );
}

//const mapStateToProps = state => ({
  //isLoggedIn: state.userReducer.isLoggedIn,
//});

function mapStateToProps(state) {
  return {
    tables: selector.tablesSelector(state),
  }
}

export default connect(mapStateToProps, null)(App);