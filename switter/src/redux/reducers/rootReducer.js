import { combineReducers } from 'redux';
import userReducer from './userReducers';
import notesReducer from './noteReducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage, 
  whitelist: ['userReducer', 'notesReducer']
}; 

const rootReducer = combineReducers({
  userReducer,
  notesReducer,
});

export default persistReducer(persistConfig, rootReducer);