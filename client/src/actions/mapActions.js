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

export const getAllMaps = () => {
  return dispatch => {
    axios.get('/api/maps/all')
      .then(events => {
        dispatch(getAllMapsSuccess(maps));
      })
      .catch(err => {
        return ['ERROR-ERROR', err];
      });
  };
};
