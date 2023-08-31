const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    pool: {
      min: 0,
      max: 10,
      acquireTimeoutMillis: 100000,
      createTimeoutMillis: 30000,
      idleTimeoutMillis: 20000,
      reapIntervalMillis: 20000,
      createRetryIntervalMillis: 200,
    },
    connection: {
      uri: env("DATABASE_URL"),
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_DATABASE"),
      user: env("DATABASE_USER"),
      password: env("DATABASE_PASSWORD"),
      ssl: false
    },
    debug: false,
  },
});
