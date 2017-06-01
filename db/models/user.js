const knex = require('knex')(require('../../knexfile'));

module.exports = (userId, cb) => {
  knex.select().from('users').where('id', userId)
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    })
}