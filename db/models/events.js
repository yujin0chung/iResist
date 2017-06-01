const knex = require('knex')(require('../../knexfile'));

module.exports.findEventIds = (userId, type,  cb) => {
  
  knex.select('event_id')
    .from('users_events')
    .where('user_id', userId)
    .andWhere('type', type)
    .then(data => {
      console.log('data in events ', data)
      cb(null, data);
    })
    .catch(e => {
      console.log('data in events error ', e)
      cb(e, null);
    })
}

module.exports.findEventData = (eventIds, cb) => {
  knex.select().from('events').where('id', 'in', eventIds)
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    })
}

module.exports.findAttendees = (eventId, cb) => {

}