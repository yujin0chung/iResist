const knex = require('../').knex
const formatDate = require('../lib/formatDate');



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

module.exports.createEvent = (data, cb) => {
  const startHours = data.timeStart.split(':')[0];
  const startMinutes = data.timeStart.split(';')[1];
  const endHours = data.timeEnd.split(':')[0];
  const endMinutes = data.timeEnd.split(':')[1];
  const eventStart = formatDate(data.date, startHours, startMinutes);
  const eventEnd = formatDate(data.date, endHours, endMinutes);
  
  const values = {
    name: data.name, 
    description: data.description,
    cause: data.cause,
    address: data.address,
    attendee_count: 1,
    time: eventStart,
    duration: eventEnd - eventStart
  }

  console.log('VALUES IN MODEL: ', values)
  console.log('CURRENT UTC: ', Date.now())
  knex('events').insert(values)
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      console.log('??????', e)
      cb(e, null);
    })
}

module.exports.findAttendees = (eventId, cb) => {

}



