const getKnexConfig = (env) => {
  console.log('THIS IS THE CONSOLE LOG IN THE KNEX FILE: ', env, typeof env);

  if (env === 'development') {
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
  } else if (env === 'production') {
    return {
      client: 'postgresql',
      connection: process.env.DATABASE_URL,
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: 'db/migrations'
      },
      seeds: {
        directory: 'db/seeds'
      }
    };
  } else if (env === 'test') {
    return {
      client: 'postgresql',
      connection: {
        database: 'iresisttest',
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
  } else if (env === 'staging') {
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
