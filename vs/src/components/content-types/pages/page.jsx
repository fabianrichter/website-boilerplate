import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { PageQuery } from "./page.gql";
import Components from "@/components/components/components";
import Error404 from "@/components/system/404";

const Page = ({ path, content }) => {
  return (
    <div>
      <Components content={content.attributes.components} />
    </div>
  );
};

export default Page;
