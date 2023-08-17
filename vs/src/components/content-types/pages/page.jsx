import React, { useState } from "react";
import Components from "@/components/components/components";

const Page = ({ content }) => {
  return (
    <div>
      <Components content={content.attributes.components} />
    </div>
  );
};

export default Page;
