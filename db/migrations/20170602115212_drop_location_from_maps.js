
exports.up = function(knex, Promise) {
  return knex.schema.table('maps', function(t) {
    t.dropColumn('event_loction');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('maps', function(t) {
    t.string('event_loction', 200).nullable();
  });
};
