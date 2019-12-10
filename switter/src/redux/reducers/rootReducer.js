import { combineReducers } from 'redux';
import userReducer from './userReducers';
import notesReducer from './noteReducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'notes']
};

const rootReducer = combineReducers({
  user: userReducer,
  notes: notesReducer,
});

export default persistReducer(persistConfig, rootReducer);