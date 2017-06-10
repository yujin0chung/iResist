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

export const getAllFeedSuccess = (feed) => {
  return {
    type: 'GET_ALL_FEED_SUCCESS',
    feed
  };
};

export const getAllFeedError = (err) => {
  return {
    type: 'GET_ALL_FEED_ERROR',
    err
  };
};

export const getAllFeed = () => dispatch => {
  axios.get('/api/feed/all')
    .then(feed => {
      return dispatch(getAllFeedSuccess(feed));
    })
    .catch(err => {
      return dispatch(getAllFeed(err));
    });
};



// export const getFeedMessagesError = error => {
//   return {
//     type: 'GET_MESSAGES_ERROR',
//     error
//   };
// };

// export const getFeedMessages = (eventId) => dispatch => {
//   axios.get('/api/feed/messages', {
//     params: { eventId }
//   })
//   .then(response => {
//     dispatch(getFeedMessagesSuccess(response.data));
//   })
//   .catch(error => {
//     dispatch(getFeedMessagesError(error));
//   });
// };

// export const postMessageSuccess = message => {
//   return {
//     type: 'POST_MESSAGE_SUCCESS',
//     message
//   };
// };

// export const postMessageError = error => {
//   return {
//     type: 'POST_MESSAGE_ERROR',
//     error
//   };
// };


// export const postMessage = message => dispatch => {
//   axios.post('/api/feed/postMessage', message)
//     .then(response => {
//       dispatch(postMessageSuccess(message));
//     })
//     .catch(error => {
//       dispatch(postMessageError(error));
//     });
// };