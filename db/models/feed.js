const knex = require('../').knex

module.exports.allFeeds = (cb) => {
  knex.select().from('feed')
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    })
}

module.exports.findFeedById = (eventId, cb) => {
  knex.select().from('feed')
    .where('event_id', eventId)
    .then(data => {
      cb(null, data)
    })
    .catch(e => {
      cb(e, null)
    })
}