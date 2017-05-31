
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function (table) {
      table.increments('id').unsigned().primary();
      table.string('username', 100).nullable();
      table.integer('credibility').nullable();
    }),
    knex.schema.createTableIfNotExists('events', function(table) {
      table.increments('id').unsigned().primary();
      table.string('name', 100).notNullable();
      table.string('description', 500).nullable();
      table.string('cause', 100).nullable();
      table.dateTime('event_time', 100).notNullable();
    }),
    knex.schema.createTableIfNotExists('users_events', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users');
      table.integer('event_id').unsigned();
      table.foreign('event_id').references('id').inTable('events');
      table.string('type', 30).notNullable();
    }),
    knex.schema.createTableIfNotExists('user_credibility', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('sender_id').unsigned();
      table.foreign('sender_id').references('id').inTable('users');
      table.integer('reciever_id').unsigned();
      table.foreign('reciever_id').references('id').inTable('users');
      table.integer('up_down').notNullable();
    }),
    knex.schema.createTableIfNotExists('feed', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('event_id').unsigned();
      table.foreign('event_id').references('id').inTable('events');
    }),
    knex.schema.createTableIfNotExists('feed_items', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('feed_id').unsigned();
      table.foreign('feed_id').references('id').inTable('feed');
      table.string('text', 300).nullable();
      table.string('url', 200).notNullable();
      table.integer('credibility').nullable();
    }),
    knex.schema.createTableIfNotExists('feed_item_credibility', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users');
      table.integer('feed_item_id').unsigned();
      table.foreign('feed_item_id').references('id').inTable('feed_items');
      table.integer('up_down').notNullable();
    }),
    knex.schema.createTableIfNotExists('maps', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('event_id').unsigned();
      table.foreign('event_id').references('id').inTable('events');
      table.string('event_loction', 200).notNullable();
    }),
    knex.schema.createTableIfNotExists('pins', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('map_id').unsigned();
      table.foreign('map_id').references('id').inTable('maps');
      table.string('pin_location', 200).notNullable();
    }),
    knex.schema.createTableIfNotExists('pin_credibility', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users');
      table.integer('pin_id').unsigned();
      table.foreign('pin_id').references('id').inTable('pins');
      table.integer('up_down').notNullable();
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('events'),
    knex.schema.dropTable('users_events'),
    knex.schema.dropTable('user_credibility'),
    knex.schema.dropTable('feed'),
    knex.schema.dropTable('feed_items'),
    knex.schema.dropTable('feed_item_credibility'),
    knex.schema.dropTable('maps'),
    knex.schema.dropTable('pins'),
    knex.schema.dropTable('pin_credibility')
  ])
};
