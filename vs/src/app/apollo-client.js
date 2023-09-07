import { graphqlEndpoint, graphqlEndpointServer } from "@/config";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_URL + "/graphql",
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
  connectToDevTools: true
});

export const apolloClientServer = new ApolloClient({
  uri: graphqlEndpointServer,
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
  connectToDevTools: true
});