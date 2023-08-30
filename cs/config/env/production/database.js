const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "5432",
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_DATABASE"),
      user: env("DATABASE_USER"),
      password: env("DATABASE_PASSWORD"),
    },
    debug: false,
  },
});
