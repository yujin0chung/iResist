const knex = require('../').knex;

module.exports.allMaps = (cb) => {
  knex.select().from('maps')
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    });
};

module.exports.findMapById = (eventId, cb) => {
  knex.select().from('maps')
    .where('event_id', eventId)
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    });
};

module.exports.makeMap = (eventId, lat, long, cb) => {
  knex('maps').insert({
    event_id: eventId,
    lat: lat,
    long: long
  })
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    });
};

module.exports.dayOfMap = (eventId, cb) => {
  console.log('THIS IS THE DATA ABOUT TO GO INTO THE NEW QUERY', eventId);
  knex.raw(
    `
    SELECT pins.id, pins.map_id, pins.text, pins.type, pins.latitude, pins.longitude, pins.credibility, pins.user_id, pins.time FROM pins
    INNER JOIN maps ON pins.map_id = maps.id
    INNER JOIN events ON events.id = maps.event_id
    WHERE events.id = ?;
    `, eventId
    )
    .then(data => {
      cb(null, data.rows);
    })
    .catch(err => {
      cb(err, null);
    });
};

module.exports.postPin = (pin, cb) => {
  knex('pins').insert({
    map_id: pin.map_id,
    text: pin.text,
    latitude: pin.latitude,
    longitude: pin.longitude,
    credibility: 0,
    user_id: pin.user_id,
    time: pin.time
  })
    .returning(['id', 'map_id', 'text', 'latitude', 'longitude', 'credibility', 'user_id', 'time'])
    .then(data => {
      console.log(data);
    })
    .catch(err =>
      console.log(err)
    );
};
