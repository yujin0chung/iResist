export const users = (state = {}, action) => {
  switch (action.type) {
  case 'GET_USERS_FOR_EVENT_SUCCESS': {
    return Object.assign({}, state, {
      users: action.users
    });
  }
  default:
    return state;
  }
};
