import axios from 'axios';
import dummyStore from '../data/store';
import { changeView } from './navActions.js';
import { asyncWrapper } from './asyncWrappers';
import { getAllEvents } from './eventActions';
import { getAllMaps, getDayOfMap } from './mapActions';
import { getUserEvents } from './userActions';
import { getUsersForEvent } from './usersActions';
import { getFeeds } from './feedActions';

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

export const fetchDayOfData = (userId, eventId, destinationView) => {
  return dispatch => {
    dispatch(changeView('SPINNER'));
    return Promise.all([
      dispatch(getUsersForEvent(eventId)),
      dispatch(getDayOfMap(eventId)),
      dispatch(getFeeds(eventId))
    ]).then(output => {
      dispatch(changeView(destinationView));
    }).catch(err => {
      dispatch(changeView('ERROR'));
    });
  };
};
