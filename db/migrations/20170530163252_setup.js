
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function (table) {
      table.increments('id').unsigned().primary();
      table.string('username', 100).nullable();
      table.integer('credibility').nullable();
    }),
    knex.schema.createTableIfNotExists('events', function(table) {
      table.increments('id').unsigned().primary();
      table.string('name', 100).nullable();
      table.string('description', 500).nullable();
      table.string('cause', 100).nullable();
      table.dateTime('event_time', 100).nullable();
    }),
    knex.schema.createTableIfNotExists('users_events', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade');
      table.integer('event_id').unsigned();
      table.foreign('event_id').references('id').inTable('events').onDelete('cascade');
      table.string('type', 30).nullable();
    }),
    knex.schema.createTableIfNotExists('user_credibility', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('sender_id').unsigned();
      table.foreign('sender_id').references('id').inTable('users').onDelete('cascade');
      table.integer('reciever_id').unsigned();
      table.foreign('reciever_id').references('id').inTable('users').onDelete('cascade');
      table.integer('up_down').nullable();
    }),
    knex.schema.createTableIfNotExists('feed', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('event_id').unsigned();
      table.foreign('event_id').references('id').inTable('events').onDelete('cascade');
    }),
    knex.schema.createTableIfNotExists('feed_items', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('feed_id').unsigned();
      table.foreign('feed_id').references('id').inTable('feed').onDelete('cascade');
      table.string('text', 300).nullable();
      table.string('url', 200).nullable();
      table.integer('credibility').nullable();
    }),
    knex.schema.createTableIfNotExists('feed_item_credibility', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade');
      table.integer('feed_item_id').unsigned();
      table.foreign('feed_item_id').references('id').inTable('feed_items').onDelete('cascade');
      table.integer('up_down').nullable();
    }),
    knex.schema.createTableIfNotExists('maps', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('event_id').unsigned();
      table.foreign('event_id').references('id').inTable('events').onDelete('cascade');
      table.string('event_loction', 200).nullable();
    }),
    knex.schema.createTableIfNotExists('pins', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('map_id').unsigned();
      table.foreign('map_id').references('id').inTable('maps').onDelete('cascade');
      table.string('pin_location', 200).nullable();
    }),
    knex.schema.createTableIfNotExists('pin_credibility', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade');
      table.integer('pin_id').unsigned();
      table.foreign('pin_id').references('id').inTable('pins').onDelete('cascade');
      table.integer('up_down').nullable();
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.raw('DROP TABLE users CASCADE;'),
    knex.raw('DROP TABLE events CASCADE;'),
    knex.raw('DROP TABLE users_events CASCADE;'),
    knex.raw('DROP TABLE user_credibility CASCADE;'),
    knex.raw('DROP TABLE feed CASCADE;'),
    knex.raw('DROP TABLE feed_items CASCADE;'),
    knex.raw('DROP TABLE feed_item_credibility CASCADE;'),
    knex.raw('DROP TABLE maps CASCADE;'),
    knex.raw('DROP TABLE pins CASCADE;'),
    knex.raw('DROP TABLE pin_credibility CASCADE;')
  ]);
};
