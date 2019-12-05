// Credit to Sunny: 
import React, { Component } from 'react';

//import { BrowserRouter as  NavLink, Router, Route, Switch, Link } from "react-router-dom";
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import '../WelcomePage.css';

class WelcomePage extends Component {
  render() {
    return (
        <div className="WelcomePage">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Log In</NavLink>
                <NavLink to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Log In</NavLink> or 
                  <NavLink to="/signup" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              
          </div>

        </div>
    );
  }
}

export default WelcomePage;