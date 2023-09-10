module.exports = ({ env }) => ({
  proxy: true,
  host: env("CS_HOST", "0.0.0.0"),
  port: env.int("STRAPI_PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
