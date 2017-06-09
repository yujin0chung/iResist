export const maps = (state = {}, action) => {
  switch (action.type) {
  case 'GET_ALL_MAPS_SUCCESS': {
    return Object.assign({}, state, {
      allMaps: action.maps.data
    });
  }
  case 'GET_DAY_OF_MAP_SUCCESS': {
    return Object.assign({}, state, {
      pins: action.pins.data
    });
  }
  default:
    return state;
  }
};
