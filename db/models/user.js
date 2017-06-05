const knex = require('../').knex;

module.exports.user = (userId, cb) => {
  knex.select().from('users').where('id', userId)
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    });
};

module.exports.allUsers = (cb) => {
  knex.select().from('users')
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null)

    })
}

module.exports.insertUser = (userName) => {
  knex('users').insert({username: userName, credibility: 0}).then();
};

module.exports.createEvent = (eventId, userId, cb) => {
  console.log('FROM USER CREATE EVENT: ', eventId, userId)
  knex('users_events').returning('event_id')
    .insert({
    user_id: userId,
    event_id: eventId,
    type: 'organizer'
  })
  .then(data => {
    cb(null, data);
  })
  .catch(e => {
    console.log('ERROR IS: ', e)
    cb(e, null);
  })
}
