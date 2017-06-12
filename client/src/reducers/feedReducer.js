export const feeds = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_FEED_ITEM': 
    console.log('ACTION FROM RECEIVE FEED', action)
    console.log('STATE FROM RECEIVE FEED ITEM', state)
    // let newState = Object.assign({}, state);
    // let feedItemId = action.item.feedItemId;
    // if (action.item.length > 0) {
    //   newState.feedItems[feedItemId] = action.item;
    // }
    // console.log('NEW STATE', newState)
    // newState.feedItems[action.item.feedItemId] = action.item;
    return Object.assign({}, state, {
      //feedItems: [...state.feedItems, action.item]
      feedItems: [...state.feedItems, action.item]
  });
  case 'GET_FEEDS_SUCCESS':
    return Object.assign({}, state, {
      feeds: action.feeds.data.feeds
    });
  case 'GET_FEED_ITEMS_SUCCESS':
    return Object.assign({}, state, {
      feedItems: action.feedItems.data.feedItems
    });
  case 'GET_FEEDS_ERROR':
    return Object.assign({}, state, {
      error: action.error
    });
  case 'GET_FEED_ITEMS_ERROR':
    return Object.assign({}, state, {
      error: action.error
    })
  case 'POST_FEED_ITEM_SUCCESS':
    return Object.assign({}, state, {
      item: action.item
    });
  case 'POST_FEED_ITEM_ERROR':
    return Object.assign({}, state, {
      error: action.error
    });
  default: return state;
  }
};

