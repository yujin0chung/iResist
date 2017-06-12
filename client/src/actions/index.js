import * as eventActions from './eventActions.js';
import * as feedActions from './feedActions';
import * as mapActions from './mapActions';
import * as navActions from './navActions';
import * as fetchDataActions from './fetchDataActions';
import * as userActions from './userActions';
import * as asyncWrappers from './asyncWrappers';
import * as usersActions from './usersActions';

// export event actions
export const postEvent = eventActions.postEvent;
export const updateEvent = eventActions.updateEvent;
export const deleteEvent = eventActions.deleteEvent;
export const attendEvent = eventActions.attendEvent;
export const addUserToEvent = eventActions.addUserToEvent;
export const removeUserFromEvent = eventActions.removeUserFromEvent;
export const getAllEvents = eventActions.getAllEvents;
export const getEvent = eventActions.getEvent;
export const setDayOfEvent = eventActions.setDayOfEvent;

// navigation actions
export const changeView = navActions.changeView;

// map actions
export const dropPin = mapActions.dropPin;
export const votePin = mapActions.votePin;
export const removePin = mapActions.removePin;
export const getAllMaps = mapActions.getAllMaps;
export const getDayOfMap = mapActions.getDayOfMap;

// feed actions
export const postItem = feedActions.postItem;
export const voteItem = feedActions.voteItem;
export const deleteItem = feedActions.deleteItem;
//export const postMessage = feedActions.postMessage;
//export const getFeedMessages = feedActions.getFeedMessages;
export const getFeeds = feedActions.getFeeds;
export const receiveFeedItem = feedActions.receiveFeedItem;

// fetch actions
export const fetchData = fetchDataActions.fetchData;
export const fetchDayOfData = fetchDataActions.fetchDayOfData;

//user actions
export const getUserId = userActions.getUserId;
export const getUserEventsSuccess = userActions.getUserEventsSuccess;
export const getUserEvents = userActions.getUserEvents;

//async wrapper
export const asyncWrapper = asyncWrappers.asyncWrapper;

//users actions
export const getUsersForEvent = usersActions.getUsersForEvent;
