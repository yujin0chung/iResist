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
