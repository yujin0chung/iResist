
exports.up = function(knex, Promise) {
  return knex.schema.table('maps', function(t) {
    t.float('lat').nullable();
    t.float('long').nullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('maps', function(t) {
    t.dropColumn('lat');
    t.dropColumn('long');
  })
};

