
exports.up = function(knex, Promise) {
  return knex.schema.table('feed_items', function(t) {
    t.integer('user_id').notNullable();
    t.string('type', 200).nullable();
  });
};


exports.down = function(knex, Promise) {
  return knex.schema.table('feed_items', function(t) {
    t.dropColumn('user_id');
    t.dropColumn('type');
  });
};
