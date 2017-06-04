const knex = require('../').knex;
const formatDate = require('../lib/formatDate');



module.exports.findAllEvents = (cb) => {
  knex.select().from('events')
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    });
};

module.exports.findAllAttendees = (cb) => {
  knex.select().from('users_events')
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    });
};

module.exports.findEventAttendees = (eventId, cb) => {
  knex.select().from('users_events')
    .where('event_id', eventId)
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    });
};

module.exports.findEventByIds = (userId, type, cb) => {

  knex.select('event_id')
    .from('users_events')
    .where('user_id', userId)
    .andWhere('type', type)
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    });
};

module.exports.findEventData = (eventIds, cb) => {
  knex.select().from('events').where('id', 'in', eventIds)
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    });
};


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
  };

  knex('events')
    .returning('id')
    .insert(values)
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    });
};


module.exports.incrementAttendeeCount = (eventId, cb) => {
  knex('events').where('id', '=', eventId).increment('attendee_count', 1)
    .then(data => {
      cb(null, data);
    })
    .catch(err => {
      cb(err, null);
    });
};

module.exports.decrementAttendeeCount = (eventId, cb) => {
  knex('events').where('id', '=', eventId).decrement('attendee_count', 1)
    .then(data => {
      cb(null, data);
    })
    .catch(err => {
      cb(err, null);
    });
};

module.exports.joinEvent = (eventId, userId, type, cb) => {
  knex('users_events').insert({user_id: userId, event_id: eventId, type: type})
    .then(data => {
      cb(null, data);
    })
    .catch(err => {
      console.log('ERROR FROM MODELS/JOINEVENT:', err);
      cb(err, null);
    });
};


module.exports.leaveEvent = (eventId, userId, type, cb) => {
  knex('users_events')
    .where('event_id', eventId)
    .andWhere('user_id', userId)
    .del()
      .then(data => {
        cb(null, data);
      })
      .catch(err => {
        console.log('LEAVE EVENT ERROR DB:', err)
        cb(err, null);
      })
}

