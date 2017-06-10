
exports.up = function(knex, Promise) {
  return knex.schema.table('pins', function(t) {
    t.string('text', 200).nullable();
    t.string('type', 200).nullable();
    t.float('latitude').notNullable();
    t.float('longitude').notNullable();
    t.integer('credibility').nullable();
    t.integer('user_id').notNullable();
    t.bigInteger('time').nullable();
    t.foreign('user_id').references('id').inTable('users');
    t.dropColumn('pin_location');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('pins', function(t) {
    t.string('pin_location', 200).nullable();
    t.dropColumn('text');
    t.dropColumn('type');
    t.dropColumn('latitude');
    t.dropColumn('longitude');
    t.dropColumn('credibility');
    t.dropColumn('user_id');
    t.dropColumn('time');
  });
};
