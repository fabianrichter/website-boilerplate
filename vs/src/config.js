let next_public_strapi_url = false;
if (process.env.NEXT_PUBLIC_STRAPI_HOST && process.env.NEXT_PUBLIC_STRAPI_PORT) {
  next_public_strapi_url = `https://${process.env.NEXT_PUBLIC_STRAPI_HOST}:${process.env.NEXT_PUBLIC_STRAPI_PORT}`;
}

const strapiUrl = next_public_strapi_url || "http://127.0.0.1:1337",
  graphqlEndpoint = strapiUrl + "/graphql",
  strapiUrlServer = next_public_strapi_url || "http://127.0.0.1:1337",
  graphqlEndpointServer = strapiUrlServer + "/graphql";

export { strapiUrl, strapiUrlServer, graphqlEndpoint, graphqlEndpointServer };
