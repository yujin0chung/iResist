import { combineReducers } from 'redux';
import { views } from './viewsReducer.js';
import { events } from './eventReducer.js';
import { user } from './userReducer.js';
import { maps } from './mapsReducer.js';
import { users } from './usersReducer';
//import reducers here

const rootReducer = combineReducers({
  views,
  events,
  user,
  maps,
  users
});

export default rootReducer;
