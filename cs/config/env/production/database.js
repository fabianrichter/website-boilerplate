const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env.int("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_DATABASE"),
      user: env("DATABASE_USER"),
      password: env("DATABASE_PASSWORD"),
    },
    debug: false,
  },
});
