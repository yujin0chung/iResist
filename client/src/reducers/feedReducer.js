export const feeds = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_FEED_ITEM': 
    console.log('ACTION FROM RECEIVE FEED', action)
    console.log('ACTION.DATA FROM RECEIVE FEED', action.data)
    console.log('STATE FROM RECEIVE FEED ITEM', state)
    return Object.assign({}, state, {
      feedItems: [...state.feedItems, action.item]
    //  { feedItemId: {
    //   type: action.item.type,
    //   text: action.item.text,
    //   credibility: action.item.credibility,
    //   userId: action.item.userId,
    //   username: action.item.username,
    //   url: action.item.url,
    //   feedId: action.item.feedId
    // }});
  });
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

