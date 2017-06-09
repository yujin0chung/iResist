
exports.up = function(knex, Promise) {
  return knex.schema.table('pins', function(t) {
    t.string('text', 200).nullable();
    t.string('type', 200).nullable();
    t.bigInteger('latitude').notNullable();
    t.bigInteger('longitude').notNullable();
    t.integer('credibility').nullable();
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
  });
};
