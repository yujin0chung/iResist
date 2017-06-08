export const events = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_EVENT':
    return Object.assign({}, state, {
      event: action.data
    });
  case 'CREATE_ERROR':
    return Object.assign({}, state, {
      error: action.data
    });
  case 'JOIN_EVENT':
    return Object.assign({}, state, {
      eventId: action.eventId,
      userId: action.userId
    });
  case 'JOIN_ERROR':
    return Object.assign({}, state, {
      error: action.error
    });
  case 'LEAVE_EVENT':
    return Object.assign({}, state, {
      eventId: action.eventId,
      userId: action.userId
    });
  case 'LEAVE_ERROR':
    return Object.assign({}, state, {
      error: action.error
    });
  case 'GET_EVENT_SUCCESS': 
    return Object.assign({}, state, {
      event: action.event
    });
  case 'GET_EVENT_ERROR':
    return Object.assign({}, state, {
      error: action.error
    })
  case 'GET_ALL_EVENTS_SUCCESS':
    return Object.assign({}, state, {
      allEvents: action.events.data
    });
  case 'UPDATE_EVENT_SUCCESS':
    return Object.assign({}, state, {
      updatedEvent: action.updatedEvent
    })
  case 'UPDATE_EVENT_ERROR':
    return Object.assign({}, state, {
      error: action.error
    })
  case 'DELETE_EVENT_ERROR':
    return Object.assign({}, state, {
      error: action.error
    })
  default:
    return state;
  }
};






