const strapiUrl = process.env.CS_URL || "http://localhost:1337",
  graphqlEndpoint = strapiUrl + "/graphql",
  strapiUrlServer = process.env.CS_URL_SERVER || "http://192.168.32.1:1337",
  graphqlEndpointServer = strapiUrlServer + "/graphql";

export { strapiUrl, strapiUrlServer, graphqlEndpoint, graphqlEndpointServer };
