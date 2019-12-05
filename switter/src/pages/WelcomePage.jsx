// Credit to Sunny:
import React, { Component } from "react";
//import { BrowserRouter as  NavLink, Router, Route, Switch, Link } from "react-router-dom";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import switterLogo from "../csc667-logo.svg";
import "../WelcomePage.css";

class WelcomePage extends Component {
  render() {
    return (
      <div className="WelcomePage">
        <div className="App__Aside">
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <div className="logo">
            <span>
              <br />
              <Link to="/">
                <img src={switterLogo} width="70px" height="70px" alt="logo" />
              </Link>
            </span>
          </div>
          <div className="text">
            <h1>See what's happening in </h1>
            <h1>the world right now</h1>
          </div>
        </div>
        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink
              to="/login"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Log In
            </NavLink>
            <NavLink
              to="/signup"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Sign Up
            </NavLink>
          </div>

          <div className="FormTitle">
            <br /> <br /> <br /> <br /> <br />
            <span>
              <br />
              <Link to="/">
                <img src={switterLogo} width="70px" height="70px" alt="logo" />
              </Link>
            </span>
            <NavLink
              to="/login"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Log In
            </NavLink>{" "}
            or
            <NavLink
              to="/signup"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
