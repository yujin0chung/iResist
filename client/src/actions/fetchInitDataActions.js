import axios from 'axios';
import dummyStore from '../data/store';
import { changeView } from './navActions.js';


export const fetchInitDataStart = () => {
  return {
    type: 'FETCH_START',
    fetching: true
  };
};

export const fetchInitDataError = (error) => {
  return {
    type: 'FETCH_ERROR',
    fetching: false,
    hasErrored: true,
    error
  };
};

export const fetchInitDataSuccess = (data) => {
  return {
    type: 'FETCH_SUCCESS',
    fetching: false,
    data
  };
};

export const fetchInitData = (userId) => {
  return dispatch => {
    dispatch(fetchInitDataStart());
    dispatch(changeView('SPINNER'));
    axios.get('/api/dashboard', {
      params: {
        id: userId
      }
    })
      .then(response => {
        dispatch(fetchInitDataSuccess(response.data));
        dispatch(changeView('DASHBOARD'));
      })
      .catch(error => {
        dispatch(fetchInitDataError(error));
        dispatch(changeView('ERROR'));
      });
  };
};

