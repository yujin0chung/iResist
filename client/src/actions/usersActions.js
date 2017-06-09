import axios from 'axios';

export const getUserEventsSuccess = (users) => {
  return {
    type: 'GET_USERS_FOR_EVENT_SUCCESS',
    users
  };
};

export const getUsersForEvent = (eventId) => dispatch => {
  return axios.get('/api/events/users', {
    params: {
      eventId: eventId
    }
  })
  .then(response => {
    return dispatch(getUserEventsSuccess(response.data));
  });
};
