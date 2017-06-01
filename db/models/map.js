const knex = require('knex')(require('../../knexfile'));

module.exports.allMaps = (cb) => {
  knex.select().from('maps')
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    })
}

module.exports.findMapById = (eventId, cb) => {
  knex.select().from('maps')
    .where('event_id', eventId)
    .then(data => {
      cb(null, data)
    })
    .catch(e => {
      cb(e, null)
    })
}