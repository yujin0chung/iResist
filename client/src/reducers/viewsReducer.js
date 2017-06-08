export const views = (state={}, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW': {
      return {
        ...state,
        currentView: action.newView,
        optionalEventId: action.optionalEventId
      }
    }
    default:
      return state;
  }
}
