const getKnexConfig = (env) => {
  if (env = 'development') {
    return {
      client: 'postgresql',
      connection: {
        database: 'iresist',
        user: 'postgres',
        password: 'postgres',
        host: 'localhost',
        port: 5432
      },
      pool: {
        min: 1,
        max: 2
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: 'db/migrations'
      },
      seeds: {
        directory: 'db/seeds'
      }
    };
  } else if (env = 'production') {
    return {
      test: 'production'
    };
  } else if (env = 'test') {
    return {
      test: 'test'
    };
  } else if (env = 'staging') {
    return {
      test: 'staging'
    };
  } else {
    return {
      client: 'postgresql',
      connection: {
        database: 'iresist',
        user: 'postgres',
        password: 'postgres',
        host: 'localhost',
        port: 5432
      },
      pool: {
        min: 1,
        max: 2
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: 'db/migrations'
      },
      seeds: {
        directory: 'db/seeds'
      }
    };
  }
};

module.exports = getKnexConfig(process.env.NODE_ENV);
