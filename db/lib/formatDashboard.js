module.exports = (data) => {
  const response = {
    events: {},
    user: {},
    users: {},
  }
  
  const findOrganizers = (event, data) => {
    
    var organizers = {};
    data.allAttendees.forEach(attendee => {
      if(attendee.event_id === event.id && attendee.type === 'organizer') {
        data.allUsers.forEach(user => {
          if (user.id === attendee.user_id) {
            organizers[user.id] = user.username;
          }
        })
      }
    })
    
    return organizers
  }
  const countAttendees = (event, data) => {
    var count = 0;
    data.allAttendees.forEach(attendee => {
      if (attendee.event_id === event.id) {
        count++;
      }
    })
    return count;
  }
  
  const findMap = (event, data) => {
    var mapId;
    data.allMaps.forEach(map => {
      if (map.event_id === event.id) {
        mapId = map.id;
      }
    })
    return mapId;
  }

  const findFeed = (event, data) => {
    var feedId;
    data.allFeeds.forEach(feed => {
      if (feed.event_id === event.id) {
        feedId = feed.id;
      }
    })
    return mapId;
  }

  const userEventsAttending = (user, data) => {
    var attending = [];
    data.allAttendees.forEach(attendee => {
      if (attendee.user_id === user.id && attendee.type === 'attendee') {
        attending.push(attendee.event_id);
      }
    })
    return attending;
  }

  const userEventsOrganizing = (user, data) => {
    var organizing = [];
    data.allAttendees.forEach(attendee => {
      if (attendee.user_id === user.id && attendee.type === 'organizer') {
        organizing.push(attendee.event_id);
      }
    })
    return organizing;
  }
  
  data.allEvents.forEach(event => {
    response.events[event.id] = {
      organizers: findOrganizers(event, data),
      name: event.name,
      description: event.description,
      cause: event.cause,
      attendee_count: countAttendees(event, data),
      mapId: findMap(event, data),
      feedId: findFeed(event, data)
    };
    console.log('RESPONSE HERE: ', response)
  })
  response.user = {
    userId: data.user[0].id,
    userName: data.user[0].username,
    events_attending: userEventsAttending(user, data),
    events_organizing: userEventsOrganizing(user, data)
  }
  console.log('???', response )
  return response;
}