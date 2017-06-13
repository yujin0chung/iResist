exports.up = function(knex, Promise) {
  return knex.schema.table('feed_items', function(t) {
    t.bigInteger('time').nullable();
  });
};


exports.down = function(knex, Promise) {
  return knex.schema.table('feed_items', function(t) {
    t.dropColumn('time');
  });
};
