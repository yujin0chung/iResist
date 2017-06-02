export const views = (state={}, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW': {
      return {
        ...state,
        currentView: action.newView
      }
    }
    default:
      return state;
  }
}
