export const maps = (state = {}, action) => {
  switch (action.type) {
  case 'GET_ALL_MAPS_SUCCESS': {
    return Object.assign({}, state, {
      allMaps: action.maps.data
    });
  }
  default:
    return state;
  }
};
