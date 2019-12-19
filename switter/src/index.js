import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // for multiple platforms
import App from './App';
import { store, persistor } from './store';
import * as serviceWorker from './serviceWorker';
import { setActiveUsers } from './redux/actions/userActions';
import { setTweets } from './redux/actions/noteActions';
import { BrowserRouter as Router } from 'react-router-dom';

// websocket for client-side:
const ws = new WebSocket('ws://localhost:4005');

// action types:
const UPDATE_USER_COUNT = 'UPDATE_USER_COUNT';
const UPDATE_MESSAGES = 'UPDATE_MESSAGES';

// log connection closed on console
ws.onclose = () => { 
  console.log('conenction has closed!');
};

// log connection open on console
ws.onopen = () => {
  console.log('connection has opened!');
};

// on receive message, add it to the list of messages:
ws.onmessage = message => {
  // parse message from server: 
  const messageObj =  JSON.parse(message.data);
  switch (messageObj.type) {
      case UPDATE_USER_COUNT:
        store.dispatch(setActiveUsers(messageObj.count));
        break;
      default: return;
  }
  console.log(messageObj);
};

ws.onerror = e => {
  console.log(e);
};

window.ws = ws; 

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// activate hot module to reload app in browser without page refresh
if (module.hot) {
  module.hot.accept();
}

serviceWorker.unregister();

