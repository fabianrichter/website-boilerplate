import { graphqlEndpoint } from "@/config";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: graphqlEndpoint,
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
});
