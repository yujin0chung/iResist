module.exports = (userEvents) => {
  let events = {
     events_attending: [],
     events_organizing: []
  };
  userEvents.forEach(event => {
    if (event.type === 'organizer') {
      events.events_organizing.push(event.event_id);
    } 
    else {
      events.events_attending.push(event.event_id);
    }
  });
  return events;
}