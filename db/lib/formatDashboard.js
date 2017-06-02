module.exports = (data) => {
  console.log('RAW DATA: ', data)
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
    return feedId;
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
    response.events[event.id] = {}
    response.events[event.id].organizers = findOrganizers(event, data);
    response.events[event.id].name = event.name;
    response.events[event.id].description = event.description;
    response.events[event.id].cause = event.cause;
    response.events[event.id].attendee_count = countAttendees(event, data);
    response.events[event.id].mapId = findMap(event, data);
    response.events[event.id].feedId = findFeed(event, data); 
  })
  response.user.userId = data.user[0].id;
  response.user.userName = data.user[0].username;
  response.user.events_attending = userEventsAttending(data.user, data);
  response.user.events_organizing = userEventsOrganizing(data.user, data);
  
  data.allUsers.forEach(user => {
    response.users[user.id] = {};
    response.users[user.id].userName = user.username;
    response.users[user.id].userCred = user.credibility;
  })
  
  
  return response;
}
