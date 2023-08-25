import React from "react";
import Link from "next/link";

import styles from "./header.module.scss";

const NavigationTree = ({ items, level }) => {
  return (
    <ul className={[styles.ul, styles[`lvl-${level}`]].join(" ")}>
      {items &&
        items.map((item, index) => (
          <li key={index}>
            <Link href={item.path} className={styles.a}>{item.title}</Link>
            {!!item.items.length && <NavigationTree items={item.items} level={level + 1} />}
          </li>
        ))}
    </ul>
  );
};

const Menu = (props) => {
  return (
    <nav className={styles.mainNav}>
      <NavigationTree items={props.navigation.renderNavigation} level={0} />
    </nav>
  );
};

export default Menu;
