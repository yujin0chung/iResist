export const feeds = (state = {}, action) => {
  switch (action.type) {
  case 'GET_FEEDS_SUCCESS':
    return Object.assign({}, state, {
      feeds: action.feeds.data.feeds
    });
  case 'GET_FEED_ITEMS_SUCCESS':
    return Object.assign({}, state, {
      feedItems: action.feedItems.data.feedItems
    })
  case 'GET_FEEDS_ERROR':
    return Object.assign({}, state, {
      error: action.error
    });
  case 'GET_FEED_ITEMS_ERROR':
    return Object.assign({}, state, {
      error: action.error
    })
  default: return state;
  }
};

