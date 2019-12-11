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


function tables(state = [], {type, payload}) {
  switch (type) {
    case 'FETCH_ALL_TABLES':
      return [
        ...state,
        ...payload,
      ]
  }

  return state;
}

const rootReducer = combineReducers({
  user: userReducer,
  notes: notesReducer,
});

export default persistReducer(persistConfig, rootReducer);