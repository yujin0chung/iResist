const tzwhere = require('tzwhere');
tzwhere.init();

module.exports = (allEvents, allOrganizers, allMaps) => {
  let output = {};

  allEvents.forEach(event => {
    output[event.id] = event;
    if (Number(event.time) > Date.now()) {
      output[event.id].status = 'upcoming';
    } else if (Number(event.time) + Number(event.duration) < Date.now()) {
      output[event.id].status = 'passed';
    } else {
      output[event.id].status = 'ongoing';
    }
  });

  allOrganizers.forEach(organizer => {
    output[organizer.event_id].organizers = {
      userId: organizer.id,
      userName: organizer.username
    };
  });

  allMaps.forEach(map => {
    output[map.event_id].tzOffset = tzwhere.tzOffsetAt(map.lat, map.long);
  });

  return output;
};


