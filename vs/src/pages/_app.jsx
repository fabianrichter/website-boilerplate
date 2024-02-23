import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "@/lib/with-apollo";
import "../app/globals.scss";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function App({ Component, pageProps, apollo }) {
  const router = useRouter();
  const pageKey = router.asPath;

  const onExitComplete = () => {
    window.scrollTo({ top: 0 })
  }
  return (
    <ApolloProvider client={apollo}>
      <AnimatePresence initial={false} onExitComplete={onExitComplete} mode="wait">
        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
    </ApolloProvider>
  );
}

export default withApollo(App);
