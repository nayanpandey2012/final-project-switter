import React from 'react';
// comment this out: 
// import './pages/Logged_in_main'
// import logo from './logo.svg';
import switterLogo from './csc667-logo.svg';
import './App.css';
// comment this out:
// import Logged_in_main from './pages/Logged_in_main';


function App() { // I just have logged_in_main for testing, this should be replaced later
  return (
    <div className="App">
      {/* comment this out:  */}
      {/* <Logged_in_main /> */}

      <header className="App-header">
        <img src={switterLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
