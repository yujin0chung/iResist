const knex = require('knex')(require('../../knexfile'));

module.exports = (cb) => {
  knex.select().from('maps')
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    })
}