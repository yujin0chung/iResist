import axios from 'axios';
import dummyStore from '../data/store';
import { changeView } from './navActions.js';
import { asyncWrapper } from './asyncWrappers';
import { getAllEvents } from './eventActions';
import { getAllMaps } from './mapActions';
import { getUserEvents } from './userActions';

export const fetchData = (userId, destinationView) => {
  return dispatch => {
    return Promise.all([
      dispatch(getAllEvents()),
      dispatch(getUserEvents(userId)),
      dispatch(getAllMaps())
    ]).then(output => {
      dispatch(changeView(destinationView));
    }).catch(err => {
      dispatch(changeView('ERROR'));
    });
  };
};
