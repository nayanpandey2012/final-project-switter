import React, { Component } from 'react';
import Advertisement from '../src/components/advertisement';
import SigninTab from '../src/components/signinTab';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <Switch>
          <Route path= '/signin' component = {Advertisement}/>
          <Route path = '/' component= {SigninTab}/>
          </Switch>
         </div>
      </Router>
    );
  }
}

export default App;
