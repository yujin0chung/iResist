import { combineReducers } from 'redux';
// import { fetchInitDataReducer } from './fetchInitDataReducer.js';
import { views } from './viewsReducer.js';
import { events } from './eventReducer.js';
import { user } from './userReducer.js';
import { maps } from './mapsReducer.js';
//import reducers here

const rootReducer = combineReducers({
  // fetchInitDataReducer,
  views,
  events,
  user,
  maps
});

export default rootReducer;
