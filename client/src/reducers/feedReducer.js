export const feeds = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_FEED_ITEM':
    console.log('STATE FROM RECEIVE FEED ITEM', state);
    return Object.assign({}, state, {
      feedItems: [...state.feedItems, action.item]
    });
  case 'GET_FEED_ITEMS_SUCCESS':
    return Object.assign({}, state, {
      feedItems: action.feedItems.data.feedItems
    });
  case 'GET_FEED_ITEMS_ERROR':
    return Object.assign({}, state, {
      error: action.error
    });
  case 'POST_FEED_ITEM_SUCCESS':
    return Object.assign({}, state, {
      item: action.item
    });
  case 'POST_FEED_ITEM_ERROR':
    return Object.assign({}, state, {
      error: action.error
    });
  case 'RECEIVE_FEED_ITEM_VOTE':
    let newState = Object.assign({}, state);
    let targetIndex;
    for (var i = 0; i < newState.feedItems.length; i++) {
      if (newState.feedItems[i].id === action.vote.itemId) {
        targetIndex = i;
        break;
      }
    }
    newState.feedItems[targetIndex].credibility += action.vote.change;
    return newState;
  default: return state;
  }
};

