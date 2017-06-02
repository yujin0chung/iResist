export const views = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_EVENT': 
      return {
        ...state,
        display: !state.display
      }
    default: 
      return state;
  }
}