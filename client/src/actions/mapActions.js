import axios from 'axios';

export const dropPin = () => {
  return {
    type: 'INSERT TYPE HERE',
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
    axios.get('/api/maps/all')
      .then(maps => {
        dispatch(getAllMapsSuccess(maps));
      })
      .catch(err => {
        return ['ERROR-ERROR', err];
      });
  };
};
