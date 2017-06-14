
exports.up = function(knex, Promise) {
  return knex.schema.table('events', function(t) {
    t.dropColumn('event_time');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', function(t) {
    t.dateTime('event_time').nullable();
  });
};
