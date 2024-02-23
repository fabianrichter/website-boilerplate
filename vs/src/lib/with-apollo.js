import withApollo from "next-with-apollo";
import { apolloClient } from "@/app/apollo-client";

export default withApollo(({ initialState }) => apolloClient);
