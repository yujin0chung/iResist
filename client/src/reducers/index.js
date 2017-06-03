import { combineReducers } from 'redux';
import { fetchInitDataReducer } from './fetchInitDataReducer.js';
import { views } from './viewsReducer.js';
import { events } from './eventReducer.js';
//import reducers here

const rootReducer = combineReducers({
  fetchInitDataReducer,
  views,
  events
});

export default rootReducer;
