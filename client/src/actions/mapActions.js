import axios from 'axios';

export const dropPin = () => {
  return {
    type: 'USER_DROPPED_PIN',
    // INSERT OTHER CHANGES HERE
  };
};

export const votePin = () => {
  return {
    type: 'INSERT TYPE HERE',
    // INSERT OTHER CHANGES HERE
  };
};

export const removePin = () => {
  return {
    type: 'INSERT TYPE HERE',
    // INSERT OTHER CHANGES HERE
  };
};

export const getAllMapsSuccess = (maps) => {
  return {
    type: 'GET_ALL_MAPS_SUCCESS',
    maps
  };
};

export const getAllMaps = () => {
  return dispatch => {
    return axios.get('/api/maps/all')
      .then(maps => {
        return dispatch(getAllMapsSuccess(maps));
      });
  };
};

export const getDayOfMapSuccess = (map) => {
  return {
    type: 'GET_DAY_OF_MAP_SUCCESS',
    map
  };
};

export const getDayOfMap = (eventId) => {
  return dispatch => {
    return axios.get('/api/maps/dayof', {
      params: {
        eventId: eventId
      }
    })
      .then(map => {
        return dispatch(getDayOfMapSuccess(map));
      });
  };
};
