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
      cb(e, null);

    })
}

module.exports.insertUser = (userName) => {
  knex('users').insert({username: userName, credibility: 0}).then();
};

