import { Configs } from "@/store/configs";
import React, { useContext } from "react";

import styles from "./footer.module.scss";

const Footer = () => {
  // destructure footer config data
  const {
    configFooter: {
      data: { attributes: footer },
    },
  } = useContext(Configs);

  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a href={footer.instagramProfileUrl}>Instagram</a>
      </div>
      <div className={styles.copyright}>(c) 2023</div>
    </footer>
  );
};

export default Footer;
