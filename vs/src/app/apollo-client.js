import { graphqlEndpoint } from "@/config";
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
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
    new HttpLink({ uri: graphqlEndpoint }),
  ]),
});

export const query = apolloClient.query;
