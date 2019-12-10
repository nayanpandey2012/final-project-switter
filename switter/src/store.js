import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';
import logger from 'redux-logger';

// Initial store state
const initialState = {};

const middlewares = [thunk, logger];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);
















// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './redux/reducers/rootReducer';
// import logger from 'redux-logger';

// // Initial store state
// const initialState = {};

// const middlewares = [thunk, logger];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middlewares)),
// );

// export default store;