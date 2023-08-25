import { Configs } from "@/store/configs";
import React, { useContext } from "react";

const Footer = () => {
  // destructure footer config data
  const {
    configFooter: {
      data: { attributes: footer },
    },
  } = useContext(Configs);

  return (
    <footer>
      <div>(c) 2023</div>
      <div>
        <a href={footer.instagramProfileUrl}>Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
