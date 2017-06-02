
exports.up = function(knex, Promise) {
  return knex.schema.table('events', function(t) {
    t.bigInteger('time').nullable();
    t.bigInteger('duration').nullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', function(t) {
    t.dropColumn('time');
    t.dropColumn('duration');
  })
};
