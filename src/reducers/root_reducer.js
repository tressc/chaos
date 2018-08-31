import { combineReducers } from 'redux';
import uiReducer from './ui_reducer.js';
import staticReducer from './static_reducer.js';

const rootReducer = combineReducers({
  ui: uiReducer,
  static: staticReducer
});

export default rootReducer;
