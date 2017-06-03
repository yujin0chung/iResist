import axios from 'axios';

export const createEvent = event => {
  return {
    type: 'RECEIVE_EVENT',
    event,
  };
};

export const createEventError = error => {
  return {
    type: 'CREATE_ERROR',
    error
  }
}

export const postEvent = event => dispatch => {
  console.log('EVENT FROM POSTEVENT:', event)
  axios.post('/api/events/create', event)
    .then(response => {
      dispatch(createEvent(response.data));
    })
    .catch(error => {
      dispatch(createEventError(error));
    })
}

export const editEvent = () => {
  return {
    type: 'INSERT TYPE HERE',
    // INSERT OTHER CHANGES HERE
  };
};

export const deleteEvent = () => {
  return {
    type: 'INSERT TYPE HERE',
    // INSERT OTHER CHANGES HERE
  };
};

export const attendEvent = () => {
  return {
    type: 'INSERT TYPE HERE',
    // INSERT OTHER CHANGES HERE
  };
};
