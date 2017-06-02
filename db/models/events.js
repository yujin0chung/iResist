const knex = require('knex')(require('../../knexfile'));

module.exports.findAllEvents = (cb) => {
  knex.select().from('events')
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    })
}

module.exports.findAllAttendees = (cb) => {
  knex.select().from('users_events')
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    })
}

module.exports.findEventAttendees = (eventId, cb) => {
  knex.select().from('users_events')
    .where('event_id', eventId)
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    })
}

module.exports.findEventByIds = (userId, type,  cb) => {
  
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



