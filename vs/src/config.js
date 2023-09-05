const strapiUrl = process.env.CS_URL || "http://localhost:1337",
  graphqlEndpoint = strapiUrl + "/graphql",
  strapiUrlServer = "http://localhost:1337",
  graphqlEndpointServer = strapiUrlServer + "/graphql";

export { strapiUrl, strapiUrlServer, graphqlEndpoint, graphqlEndpointServer };
