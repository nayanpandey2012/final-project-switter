import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';
import { setActiveUsers } from './redux/actions/userActions';

// Websocket Credit to Tran: 
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
  }
  console.log('messageObj ', messageObj);
};

ws.onerror = e => {
  console.log(e);
};

// temporary for demonstration, used to access globally, 
// 9 times out of 10 don't do this
window.ws = ws; 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
