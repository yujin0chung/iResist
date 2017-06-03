export const events = (state = {}, action) => {
  switch(action.type) {
    case "RECEIVE_EVENT":
      return Object.assign({}, state, {
        event: action.data
      })
    case "CREATE_ERROR":
      return Object.assign({}, state, {
        error: action.data
      })
    default:
      return state;
  }
};
