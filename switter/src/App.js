import React from 'react';
import './App.css';
import twitterLogo from './pictures/twitter.png';

// import {BrowserRouter,  Link} from "react-router-dom";
// this is the main page, I think probabl;y we should create a seperate page for that


function App() {
  return (
    <div className="App">
      {/* <img src={twitterLogo} className="logo" />
      <h1>Home</h1> */}
      <div className="container">
        <div className="leftpane">
        <img src={twitterLogo} className="logo"/>
        </div>
        <div className="middlepane">
          <h1>Home</h1>
          <input type="text" name="firstname" value="Mickey"></input>
        
        </div>
        <div className="rightpane">
          <h1>Test Page</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
