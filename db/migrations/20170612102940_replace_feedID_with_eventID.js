exports.up = function(knex, Promise) {
  return knex.schema.table('feed_items', function(t) {   
    t.dropColumn('feed_id');
    t.integer('event_id').notNullable();
    t.foreign('event_id').references('id').inTable('events');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('feed_items', function(t) {
    t.dropColumn('event_id');
    t.integer('feed_id');
  });
};
