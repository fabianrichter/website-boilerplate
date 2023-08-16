import withApollo from "next-with-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { apolloClient } from "@/app/apollo-client";

export default withApollo(({ initialState }) => apolloClient);
