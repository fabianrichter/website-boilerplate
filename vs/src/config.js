const protocol = process.env.NEXT_PUBLIC_STRAPI_PROTOCOL || "http";
const host = process.env.NEXT_PUBLIC_STRAPI_HOST || "localhost";
const port = process.env.NEXT_PUBLIC_STRAPI_PORT || "1337";

const strapiUrl = `${protocol}://${host}:${port}`;
const graphqlEndpoint = strapiUrl + "/graphql";
const publicUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

export { strapiUrl, graphqlEndpoint, publicUrl };
