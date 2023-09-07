const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337",
  graphqlEndpoint = strapiUrl + "/graphql",
  strapiUrlServer = "http://localhost:1337",
  graphqlEndpointServer = strapiUrlServer + "/graphql";

export { strapiUrl, strapiUrlServer, graphqlEndpoint, graphqlEndpointServer };
