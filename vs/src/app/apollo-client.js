import { graphqlEndpoint, graphqlEndpointServer } from "@/config";
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

export const apolloClient = new ApolloClient({
  uri: graphqlEndpoint,
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
  connectToDevTools: true,
  link: ApolloLink.from([
    onError((error) => {
      console.log(JSON.stringify(error, null, 2));
    }),
    new HttpLink({ uri: "http://localhost:1337/graphql" }),
  ]),
});

export const apolloClientServer = new ApolloClient({
  uri: graphqlEndpointServer,
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
  connectToDevTools: true,
  link: ApolloLink.from([
    onError((error) => {
      console.log(JSON.stringify(error, null, 2));
    }),
    new HttpLink({ uri: "http://localhost:1337/graphql" }),
  ]),
});
