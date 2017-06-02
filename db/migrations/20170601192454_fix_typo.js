
exports.up = function(knex, Promise) {
  return knex.schema.table('events', function(t) {
    t.dropColumn('durration');
    t.integer('duration').nullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', function(t) {
    t.integer('durration').nullable();
    t.dropColumn('duration');
  })
};
