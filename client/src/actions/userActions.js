import axios from 'axios';
import { changeView } from './navActions.js';
import { fetchInitData } from './fetchInitDataActions';

export const getUserIdSuccess = (userId) => {
  return {
    type: 'GET_USER_ID_SUCCESS',
    userId
  };
};

export const getUserId = () => {
  return dispatch => {
    dispatch(changeView('SPINNER'));
    axios.get('/api/user/id')
      .then(response => {
        console.log('THIS IS THE RESPONSE FROM THE SERVER: ', response);
        dispatch(getUserIdSuccess(response.data));
        dispatch(fetchInitData(response.data.userId));
      })
      .catch(error => {
        dispatch(changeView('ERROR'));
      });
  };
};
