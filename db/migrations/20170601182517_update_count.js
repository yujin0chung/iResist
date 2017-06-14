
exports.up = function(knex, Promise) {
  return knex.schema.table('events', function(t) {
    t.string('address', 200).nullable();
    t.integer('attendee_count').nullable();
    t.integer('time').nullable();
    t.integer('duration').nullable();
    t.integer('latitude').nullable();
    t.integer('longitude').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', function(t) {
    t.dropColumn('address');
    t.dropColumn('attendee_count');
    t.dropColumn('time');
    t.dropColumn('duration');
    t.dropColumn('latitude');
    t.dropColumn('longitude');
  });
};
