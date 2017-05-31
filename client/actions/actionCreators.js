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
