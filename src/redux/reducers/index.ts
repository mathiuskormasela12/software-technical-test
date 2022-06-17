// ========== Root Reducers
// import all modules
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

// import all reducers
import authReducer from './auth';
import messagesReducer from './messages';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['messages'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  messages: messagesReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
