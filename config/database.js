module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      port: env.int('DATABASE_PORT', 5432),
      schema: env('DATABASE_SCHEMA', 'v4'), // Not required
      user: env('DATABASE_USERNAME', 'strapi'),
      host: env('DATABASE_LOCATION') == 'local' ? env('LOCAL_DATABASE_HOST') : env('DATABASE_HOST'),
      database: env('DATABASE_LOCATION') == 'local' ? env('LOCAL_DATABASE_NAME') : env('DATABASE_NAME'),
      password: env('DATABASE_LOCATION') == 'local' ? env('LOCAL_DATABASE_PASSWORD') : env('DATABASE_PASSWORD'),
      ssl: env('DATABASE_LOCATION') == 'local' ? env.bool('LOCAL_DATABASE_SSL') : { rejectUnauthorized: env.bool('DATABASE_SSL') },
    },
    debug: false,
  },
});
