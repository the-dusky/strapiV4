module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      schema: env('DATABASE_SCHEMA'), // Not required
      ssl: false //{ "rejectUnauthorized": env('DATABASE_SSL', false) } // For self-signed certificates,
    },
    debug: false,
  },
});

