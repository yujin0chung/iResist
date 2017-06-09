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