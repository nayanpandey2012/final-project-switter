import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'; 

// Initial store state 
const initialState = {};

// use thunk and redux-logger as middlewares: 
const middlewares = [thunk, logger];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

// create persistant version of Redux's store: 
export const persistor = persistStore(store);

// export default { store, persistor };