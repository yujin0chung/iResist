import { combineReducers } from 'redux';
import { fetchInitDataReducer } from './fetchInitDataReducer.js';
//import reducers here

const rootReducer = combineReducers({
  fetchInitDataReducer
})

export default rootReducer;