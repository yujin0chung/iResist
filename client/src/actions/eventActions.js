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
  axios.post('/api/events/create', event)
    .then(response => {
      dispatch(createEvent(response.data));
    })
    .catch(error => {
      dispatch(createEventError(error));
    });
};

export const joinEvent = (eventId, userId) => {
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

export const addUserToEvent = (eventId, userId) => dispatch => {
  axios.post('/api/events/join', {
    eventId,
    userId
  })
    .then(response => {
      dispatch(joinEvent(eventId, userId));
    })
    .catch(error => {
      dispatch(joinEventError(error));
    });
};

export const leaveEvent = (eventId, userId) => {
  return {
    type: 'LEAVE_EVENT',
    eventId,
    userId
  };
};

export const leaveEventError = (error) => {
  return {
    type: 'LEAVE_ERROR',
    error
  };
} ;

export const removeUserFromEvent = (eventId, userId) => dispatch => {
  axios.post('/api/events/leave', {
    eventId,
    userId
  })
    .then(response => {
      dispatch(leaveEvent(eventId, userId));
    })
    .catch(error => {
      dispatch(leaveEventError(error));
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
