
exports.up = function(knex, Promise) {
  return knex.schema.table('maps', function(t) {
    t.dropColumn('lat');
    t.dropColumn('long');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('maps', function(t) {
    t.bigInteger('lat').nullable();
    t.bigInteger('long').nullable();
  })
};
