import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Page from "@/components/content-types/pages/page";
import { apolloClient } from "@/app/apollo-client";
import { PageQuery } from "@/components/content-types/pages/page.gql";

const Home = (props) => {
  const path = usePathname();
  console.log("data", props);

  return <Page path={path} content={props.pages.data[0]} />;
};

export default Home;

export const getStaticProps = async () => {
  const client = apolloClient;
  const { data } = await client.query({
    query: PageQuery,
    variables: {
      slug: "/",
    },
  });
  return { props: data };
};
