import React, { Component } from 'react';
// import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import '../WelcomePage.css';

class WelcomePage extends Component {
  render() {
    return (
      <Router>
        <div className="WelcomePage">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                {/* <Link to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</Link>
                <Link to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</Link>
                <Link exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Home</Link> */}

                <Link to="/login" >Sign In</Link>
                <Link to="/signup" >Sign Up</Link>
                <Link exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Home</Link>
              </div>

              {/* <div className="FormTitle">
                  <Link to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</Link> or 
                  <Link to="/signup" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</Link>
              </div> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default WelcomePage;