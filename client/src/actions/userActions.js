import axios from 'axios';
import { changeView } from './navActions.js';
import { fetchInitData } from './fetchInitDataActions';

export const getUserIdSuccess = () => {
  return {
    type: 'GET_USER_ID_SUCCESS',
  };
};

export const getUserId = (userId) => {
  return dispatch => {
    dispatch(changeView('SPINNER'));
    axios.get('/api/user/id')
      .then(response => {
        dispatch(getUserIdSuccess(response.data));
        dispatch(fetchInitData(response.data.userId));
      })
      .catch(error => {
        dispatch(changeView('ERROR'));
      });
  };
};
