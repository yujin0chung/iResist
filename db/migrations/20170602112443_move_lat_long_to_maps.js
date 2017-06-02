
exports.up = function(knex, Promise) {
  return knex.schema.table('events', function(t) {
    t.dropColumn('latitude');
    t.dropColumn('longitude');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', function(t) {
    t.integer('latitude').nullable();
    t.integer('longitude').nullable();
  })
};
