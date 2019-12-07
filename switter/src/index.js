import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';
import { setActiveUsers } from './redux/actions/userActions';
import { BrowserRouter as Router } from 'react-router-dom';

// websocket for active user: 
const ws = new WebSocket('ws://localhost:4005');

ws.onopen = () => {
  console.log('connection has opened!');
}

ws.onmessage = message => {
  const messageObj =  JSON.parse(message.data);
  switch (messageObj.type) {
      case 'UPDATE_USER_COUNT':
          store.dispatch(setActiveUsers(messageObj.count));
          break;
      default: return;
  }
};

ws.onerror = e => {
  console.log(e);
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
