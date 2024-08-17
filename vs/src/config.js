let next_public_strapi_url = false;
if (process.env.NEXT_PUBLIC_STRAPI_HOST && process.env.NEXT_PUBLIC_STRAPI_PORT) {
  next_public_strapi_url = `${process.env.NEXT_PUBLIC_STRAPI_HOST}:${process.env.NEXT_PUBLIC_STRAPI_PORT}`;
}

const self = process.env.NEXT_PUBLIC_URL || "http://127.0.0.1:3000";

const strapiUrl = next_public_strapi_url || "http://127.0.0.1:1337",
  graphqlEndpoint = strapiUrl + "/graphql";

export { strapiUrl, graphqlEndpoint, self };
