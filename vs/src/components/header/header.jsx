"use client";

import React, { useEffect, useState } from "react";
import Menu from "./menu";

import styles from "./header.module.scss";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

import Logo from "./Logo.svg";
import Image from "next/image";

const Header = (props) => {
  const [menuActive, setMenuActive] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setScrollPosition(window.scrollY);
    document.addEventListener("scroll", (e) => {
      setScrollPosition((prev) => {
        prev < window.scrollY ? setIsScrollingDown(true) : setIsScrollingDown(false);
        return window.scrollY;
      });
    });
  }, []);

  useEffect(() => {
    scrollPosition >= 250 ? setIsTop(false) : setIsTop(true);
    scrollPosition > 0 ? setIsScrolled(true) : setIsScrolled(false);
  }, [scrollPosition]);

  const headerClassNames = classNames({
    [styles.down]: isScrollingDown,
    [styles.top]: isTop,
    [styles.scrolled]: isScrolled,
    [styles.wrapper]: true,
  });

  return (
    <header className={headerClassNames}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link scroll={false} href="/">
            <Image src={Logo} />
          </Link>
        </div>
        <div className={styles["desktop-menu"]}>
          <Menu navigation={props.navigation} />
          <Link className={styles["button"]} href={"/kontakt"}>
            Kontakt
          </Link>
        </div>
        <div className={styles.toggle} onClick={() => setMenuActive((s) => !s)} role="button">
          Menu
        </div>
      </div>
      <AnimatePresence>
        {menuActive && (
          <motion.div
            className={styles.fullscreen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Menu navigation={props.navigation} onClose={() => setMenuActive(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
