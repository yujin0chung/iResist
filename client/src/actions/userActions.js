import axios from 'axios';
import { changeView } from './navActions.js';
import { fetchInitData } from './fetchInitDataActions';

export const getUserIdSuccess = (user) => {
  return {
    type: 'GET_USER_ID_SUCCESS',
    user
  };
};

export const getUserId = () => {
  return dispatch => {
    dispatch(changeView('SPINNER'));
    axios.get('/api/user/id')
      .then(response => {
        console.log('THIS IS THE RESPONSE FROM THE SERVER: ', response);
        dispatch(getUserIdSuccess(response.data.user));
        dispatch(fetchInitData(response.data.user.id));
      })
      .catch(error => {
        dispatch(changeView('ERROR'));
      });
  };
};
