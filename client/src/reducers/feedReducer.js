export const feed = (state = {}, action) => {
  switch (action.type) {
  case 'GET_ALL_FEED_SUCCESS':
    return Object.assign({}, state, {
      feed: action.feed
    });
  case 'GET_ALL_FEED_ERROR':
    return Object.assign({}, state, {
      error: action.error
    });
  default: return state;
  }
};
