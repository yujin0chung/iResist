import { combineReducers } from 'redux';
import { views } from './viewsReducer.js';
import { events } from './eventReducer.js';
import { user } from './userReducer.js';
import { maps } from './mapsReducer.js';
//import reducers here

const rootReducer = combineReducers({
  views,
  events,
  user,
  maps
});

export default rootReducer;
