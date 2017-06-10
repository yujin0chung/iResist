export const postItem = () => {
  return {
    type: 'INSERT TYPE HERE',
    // INSERT OTHER CHANGES HERE
  };
};

export const voteItem = () => {
  return {
    type: 'INSERT TYPE HERE',
    // INSERT OTHER CHANGES HERE
  };
};

export const deleteItem = () => {
  return {
    type: 'INSERT TYPE HERE',
    // INSERT OTHER CHANGES HERE
  };
};

export const getFeedMessagesSuccess = messages => {
  return {
    type: 'GET_MESSAGES_SUCCESS',
    messages
  };
};

export const getFeedMessagesError = error => {
  return {
    type: 'GET_MESSAGES_ERROR',
    error
  };
};

export const getFeedMessages = (eventId) => dispatch => {
  axios.get('/api/feed/messages', {
    params: {
      eventId: eventId
    }
  })
  .then(response => {
    dispatch(getFeedMessagesSuccess(response.data));
  })
  .catch(error => {
    dispatch(getFeedMessagesError(error));
  });
};

export const postMessageSuccess = message => {
  return {
    type: 'POST_MESSAGE_SUCCESS',
    message
  };
};

export const postMessageError = error => {
  return {
    type: 'POST_MESSAGE_ERROR',
    error
  };
};


export const postMessage = message => dispatch => {
  axios.post('/api/feed/postMessage', message)
    .then(response => {
      dispatch(postMessageSuccess(message));
    })
    .catch(error => {
      dispatch(postMessageError(error));
    });
};