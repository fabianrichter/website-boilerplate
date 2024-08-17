const protocol = process.env.NEXT_PUBLIC_STRAPI_PROTOCOL || "http";
const host = process.env.NEXT_PUBLIC_STRAPI_HOST || "localhost";
const port = process.env.NEXT_PUBLIC_STRAPI_PORT || "3000";

const strapiUrl = `${protocol}://${host}:${port}`;
const graphqlEndpoint = strapiUrl + "/graphql";

export { strapiUrl, graphqlEndpoint };
