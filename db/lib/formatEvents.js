module.exports = (allEvents, allOrganizers) => {
  let output = {};

  allEvents.forEach(event => {
    output[event.id] = event;
  });

  allOrganizers.forEach(organizer => {
    output[organizer.event_id].organizers = {
      userId: organizer.id,
      userName: organizer.username
    };
  });

  return output;
};
