import axios from 'axios';


export const fetchInitDataStart = () => {
  return {
    type: 'FETCH_START',
    fetching: true
  };
};

export const fetchInitDataError = (error) => {
  return {
    type: 'FETCH_ERROR',
    fetching: false,
    hasErrored: true,
    error
  };
};

export const fetchInitDataSuccess = (data) => {
  return {
    type: 'FETCH_SUCCESS',
    fetching: true,
    data
  };
};


export const fetchInitData = (userId) => {
  return dispatch => {
    dispatch(fetchInitDataStart());
    axios.get('some endpoint') 
      .then(response => {
        dispatch(fetchInitDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchInitDataError(error));
      });
  };
};

