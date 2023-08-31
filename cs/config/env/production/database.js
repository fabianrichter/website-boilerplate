const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      uri: env("DATABASE_URL"),
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_DATABASE"),
      user: env("DATABASE_USER"),
      password: env("DATABASE_PASSWORD"),
    },
    debug: false,
  },
});
