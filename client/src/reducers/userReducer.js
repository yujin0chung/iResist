export const views = (state = {}, action) => {
  switch (action.type) {
  case 'GET_USER_ID_SUCCESS': {
    console.log(action);
      // return {
      //   ...state,
      //   currentView: action.newView
      // }
  }
  default:
    return state;
  }
};
