import eventActions from './eventActions';
import feedActions from './feedActions';
import mapActions from './mapActions';
import navActions from './navActions';

// export event actions
export const createEvent = eventActions.createEvent;
export const editEvent = eventActions.editEvent;
export const deleteEvent = eventActions.deleteEvent;
export const attendEvent = eventActions.attendEvent;

// navigation actions
export const viewDashboard = navActions.viewDashboard;
export const viewCreateEditEvent = navActions.viewCreateEditEvent;
export const viewEventDropDown = navActions.viewEventDropDown;
export const viewEventCard = navActions.viewEventCard;
export const viewMap = navActions.viewMap;
export const viewFeed = navActions.viewFeed;

// map actions
export const dropPin = mapActions.dropPin;
export const votePin = mapActions.votePin;
export const removePin = mapActions.RemovePin;

// feed actions
export const postItem = mapActions.postItem;
export const voteItem = mapActions.voteItem;
export const deleteItem = mapActions.deleteItem;
