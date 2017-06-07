import axios from 'axios';
import dummyStore from '../data/store';
import { changeView } from './navActions.js';
import { asyncWrapper } from './asyncWrappers';
import { getAllEvents } from './eventActions';
import { getAllMaps } from './mapActions';
import { getUserEvents } from './userActions';

// export const fetchInitDataStart = () => {
//   return {
//     type: 'FETCH_START',
//     fetching: true
//   };
// };

// export const fetchInitDataError = (error) => {
//   return {
//     type: 'FETCH_ERROR',
//     fetching: false,
//     hasErrored: true,
//     error
//   };
// };

// export const fetchInitDataSuccess = (data) => {
//   return {
//     type: 'FETCH_SUCCESS',
//     fetching: false,
//     data
//   };
// };

export const fetchData = (userId, destinationView) => {
  return dispatch => {
    dispatch(asyncWrapper([getAllevents(userId), getAllMaps(), getUserEvents(userId)], destinationView));
    // dispatch(changeView('SPINNER'));
    // axios.get('/api/dashboard', {
    //   params: {
    //     id: userId
    //   }
    // })
    //   .then(response => {
    //     dispatch(fetchInitDataSuccess(response.data));
    //     dispatch(changeView('DASHBOARD'));
    //   })
    //   .catch(error => {
    //     dispatch(fetchInitDataError(error));
    //     dispatch(changeView('ERROR'));
    //   });
  };
};
