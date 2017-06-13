const knex = require('knex')(require('../knexfile'));
const db = require('bookshelf')(knex);

db.plugin('registry');
db.plugin('pagination');


module.exports.knex = knex;
module.exports = db;

