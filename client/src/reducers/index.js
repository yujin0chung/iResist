import { combineReducers } from 'redux';
import { fetchInitDataReducer } from './fetchInitDataReducer.js';
import { views } from './viewsReducer.js';
//import reducers here

const rootReducer = combineReducers({
  fetchInitDataReducer,
  views
});

export default rootReducer;