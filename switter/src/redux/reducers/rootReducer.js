import { combineReducers } from 'redux';
import userReducer from './userReducers';
import notesReducer from './noteReducers';

export default combineReducers({
  userReducer,
  notesReducer,
});