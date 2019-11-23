import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sign_up from './pages/Sign_up';
import './pages/Logged_in_main'
import switterLogo from './csc667-logo.svg';

import Logged_in_main from './pages/Logged_in_main';



function App() {
  return (

    <div>
      <Logged_in_main />
    </div>

  );
}

export default App;
