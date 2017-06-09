export const feed = (state = {}, action) => {
  switch (action.type) {
  case 'POST_MESSAGE_SUCCESS':
    return Object.assign({}, state, {
      message: action.message
    });
  case 'POST_MESSAGE_ERROR':
    return Object.assign({}, state, {
      error: action.error
    });
  default: return state;
  }
};
