export const maps = (state = {}, action) => {
  switch (action.type) {
  case 'GET_ALL_MAPS_SUCCESS': {
    return Object.assign({}, state, {
      allMaps: action.maps.data
    });
  }
  case 'GET_DAY_OF_MAP_SUCCESS': {
    let newState = Object.assign({}, state);
    if (action.map.data.allPins.length > 0) {
      const targetPin = action.map.data.allPins[0];
      const targetMap = action.map.data[targetPin].map_id;
      newState.allMaps[targetMap].pins = action.map.data.allPins;
    }
    return Object.assign({}, newState, {
      pins: action.map.data
    });
  }
  case 'RECEIVED_PIN': {
    let newState = Object.assign({}, state);
    const pinId = action.pin.allPins[0];
    const mapId = action.pin[pinId].map_id;
    newState.pins.allPins.push(pinId);
    newState.pins[pinId] = action.pin[pinId];
    return newState;
  }
  case 'RECEIVED_PIN_VOTE': {
    let newState = Object.assign({}, state);
    newState.pins[action.vote.pinId].credibility += action.vote.change;
    return newState;
  }
  default:
    return state;
  }
};
