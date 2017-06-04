export const views = (state = {}, action) => {
  switch (action.type) {
  case 'GET_USER_ID_SUCCESS': {
    console.log('THE GET USER ID SUCCESS REDUCER RAN', action);
      // return {
      //   ...state,
      //   currentView: action.newView
      // }
  }
  default:
    return state;
  }
};
