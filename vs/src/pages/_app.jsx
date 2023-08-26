import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '@/hooks/with-apollo';
import "../app/globals.scss";

function App({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default withApollo(App);