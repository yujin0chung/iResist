import * as eventActions from './eventActions.js';
import * as feedActions from './feedActions';
import * as mapActions from './mapActions';
import * as navActions from './navActions';
import * as fetchDataActions from './fetchDataActions';
import * as userActions from './userActions';
import * as asyncWrappers from './asyncWrappers';

// export event actions
export const postEvent = eventActions.postEvent;
export const editEvent = eventActions.editEvent;
export const deleteEvent = eventActions.deleteEvent;
export const attendEvent = eventActions.attendEvent;
export const addUserToEvent = eventActions.addUserToEvent;
export const removeUserFromEvent = eventActions.removeUserFromEvent;
export const getAllEvents = eventActions.getAllEvents;

// navigation actions
export const viewDashboard = navActions.viewDashboard;
export const viewCreateEditEvent = navActions.viewCreateEditEvent;
export const viewEventDropDown = navActions.viewEventDropDown;
export const viewEventCard = navActions.viewEventCard;
export const viewMap = navActions.viewMap;
export const viewFeed = navActions.viewFeed;
export const changeView = navActions.changeView;

// map actions
export const dropPin = mapActions.dropPin;
export const votePin = mapActions.votePin;
export const removePin = mapActions.removePin;
export const getAllMaps = mapActions.getAllMaps;

// feed actions
export const postItem = feedActions.postItem;
export const voteItem = feedActions.voteItem;
export const deleteItem = feedActions.deleteItem;

// fetch actions
export const fetchData = fetchDataActions.fetchData;

//user actions
export const getUserId = userActions.getUserId;
export const getUserEventsSuccess = userActions.getUserEventsSuccess;
export const getUserEvents = userActions.getUserEvents;

//async wrapper
export const asyncWrapper = asyncWrappers.asyncWrapper;
