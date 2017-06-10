export const maps = (state = {}, action) => {
  switch (action.type) {
  case 'GET_ALL_MAPS_SUCCESS': {
    return Object.assign({}, state, {
      allMaps: action.maps.data
    });
  }
  case 'GET_DAY_OF_MAP_SUCCESS': {
    let newState = Object.assign(state);
    if (action.map.data.allPins.length > 0) {
      const targetPin = action.map.data.allPins[0];
      const targetMap = action.map.data[targetPin].map_id;
      newState.allMaps[targetMap].pins = action.map.data.allPins;
    }
    return Object.assign({}, newState, {
      pins: action.map.data
    });
  }
  default:
    return state;
  }
};
