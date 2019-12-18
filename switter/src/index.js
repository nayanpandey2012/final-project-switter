import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // for multiple platforms
import App from './App';
import { store, persistor } from './store';
import * as serviceWorker from './serviceWorker';
import { setActiveUsers } from './redux/actions/userActions';
import { BrowserRouter as Router } from 'react-router-dom';

// websocket for client-side:
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

