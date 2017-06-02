
exports.up = function(knex, Promise) {
  return knex.schema.table('events', function(t) {
    t.dropColumn('time');
    t.dropColumn('duration');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', function(t) {
    t.integer('time').nullable();
    t.integer('duration').nullable();
  })
};
