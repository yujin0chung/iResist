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
  };
};

export const postEvent = event => dispatch => {
  axios.post('/api/createEvent', event)
    .then(response => {
      dispatch(createEvent(response.data));
    })
    .catch(error => {
      dispatch(createEventError(error));
    });
};

export const joinEvent = (eventId, userId, joining) => {
  return {
    type: 'JOIN_EVENT',
    eventId,
    userId,
    joining
  };
};

export const joinEventError = (error) => {
  return {
    type: 'JOIN_ERROR',
    error
  };
};

export const addUserToEvent = (eventId, userId, joining) => dispatch => {
  axios.post('/api/joinEvent', {
    params: {
      userId,
      eventId,
      joining
    }
  })
    .then(response => {
      dispatch(joinEvent(eventId, userId, joining));
    })
    .catch(error => {
      dispatch(joinEventError(error));
    });
};


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

