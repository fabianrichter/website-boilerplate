import { Configs } from "@/store/configs";
import React, { useContext } from "react";

import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
  // destructure footer config data
  const {
    configFooter: {
      data: { attributes: footer },
    },
  } = useContext(Configs);

  const footerLine = [
    {
      label: "Imprint",
      url: footer.imprintAlias || "/"
    },
    {
      label: "Privacy",
      url: footer.privacyAlias || "/"
    }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a href={footer.instagramProfileUrl}>Instagram</a>
      </div>
      <div className={styles["footer-line"]}>
        {footerLine.map(link => (
          <Link href={link.url}>{link.label}</Link>
        ))}
      </div>
      <div className={styles.copyright}>(c) 2023</div>
    </footer>
  );
};

export default Footer;
