export const user = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER_ID_SUCCESS': {
      return Object.assign({}, state, {
        username: action.user.email,
        userId: action.user.id
      });
    }
    case 'GET_USER_EVENTS_SUCCESS': {
      return Object.assign({}, state, {
        events_attending: action.userEvents.events_attending,
        events_organizing: action.userEvents.events_organizing
      });
    }
  default:
    return state;
  }
};
