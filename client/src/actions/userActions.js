import axios from 'axios';
import { changeView } from './navActions.js';
import { fetchInitData } from './fetchInitDataActions';
import { asyncWrapper } from './asyncWrappers';

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
        dispatch(getUserIdSuccess(response.data.user))
        dispatch(asyncWrapper(dispatch(fetchInitData(response.data.user.id)), dispatch(getUserEvents(response.data.user.id))
        ))
      })
      .catch(error => {
        dispatch(changeView('ERROR'));
      });
  };
};

export const getUserEventsSuccess = (userEvents) => {
  return {
    type: 'GET_USER_EVENTS_SUCCESS',
    userEvents
  };
};

export const getUserEvents = (userId) => dispatch => {
  axios.get('/api/user/events', {
    params: {
      userId: userId
    }
  })
  .then(response => {
    dispatch(getUserEventsSuccess(response.data))
  })
  .catch(err => {
    return ['ERROR-ERROR', err];
  });
};
