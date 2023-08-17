import { ApolloClient, ApolloProvider } from '@apollo/react-hooks';
import { apolloClient } from '@/app/apollo-client';
import withApollo from '@/hooks/with-apollo';
import Header from '@/components/header/header';
import { usePathname } from 'next/navigation';

function App({ Component, pageProps, apollo }) {
  const path = usePathname();
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default withApollo(App);