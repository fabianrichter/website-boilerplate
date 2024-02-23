import React, { useState } from "react";
import Components from "@/components/components/components";

const Page = ({ content }) => {
  return <Components content={content.attributes.components} />;
};

export default Page;
