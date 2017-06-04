export const user = (state = {}, action) => {
  switch (action.type) {
  case 'GET_USER_ID_SUCCESS': {
    console.log('THIS IS THE EACTION THAT GOES INTO THE REDUCER', action);
    return Object.assign({}, state, {
      username: action.user.email,
      userId: action.user.id
    });
  }
  default:
    return state;
  }
};
