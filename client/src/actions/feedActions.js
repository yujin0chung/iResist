import axios from 'axios';

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

export const getFeedsSuccess = (feeds) => {
  return {
    type: 'GET_FEEDS_SUCCESS',
    feeds
  };
};

export const getFeedItemsSuccess = (feedItems) => {
  return {
    type: 'GET_FEED_ITEMS_SUCCESS',
    feedItems
  };
};

export const getFeedsError = (error) => {
  return {
    type: 'GET_FEEDS_ERROR',
    error
  };
};

export const getFeedItemsError = (error) => {
  return {
    type: 'GET_FEED_ITEMS_ERROR',
    error
  }
}

export const getFeeds = (eventId) => dispatch => {
  axios.get('/api/feed/event', {
    params: { eventId }
  })
  .then(feeds => {
    dispatch(getFeedsSuccess(feeds));
    dispatch(getFeedItemsSuccess(feeds))
  })
  .catch(error => {
    dispatch(getFeedItemsError(error));
    dispatch(getFeedsError(error))
  });
};

export const postFeedItemSuccess = (item) => {
  return {
    type: 'POST_FEED_ITEM_SUCCESS',
    item
  };
};

export const postFeedItemError = (error) => {
  return {
    type: 'POST_FEED_ITEM_ERROR',
    error
  };
};

export const postFeedItem = (item) => dispatch => {
  axios.post('/api/feed/postItem', item)
    .then(response => {
      dispatch(postFeedItemSuccess(response.data));
    })
    .catch(error => {
      dispatch(postFeedItemError(error));
    })
}

export const receiveFeedItem = (item) => {
  return {
    type: 'RECEIVE_FEED_ITEM',
    item
  }
}



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