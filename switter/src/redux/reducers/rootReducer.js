import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // get localStorage object from window
import userReducer from './userReducers';
import notesReducer from './noteReducers';

const persistConfig = {
  key: 'root',
  storage, 
};

const rootReducer = combineReducers({
  userReducer,
  notesReducer,
});

export default persistReducer(persistConfig, rootReducer);

