import React, { Component } from 'react';
import {HashRouter as Link, NavLink} from 'react-router-dom';
//import { Link } from 'react-router-dom';

const SigninTab = () => {
    return (
        <div className="App__Form"> 
          <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="text">
                <h1>See what's happening in </h1>
                <h1>the world right now</h1>
              </div>
                
              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or
                  <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
          
          </div>

    );
}
export default SigninTab;