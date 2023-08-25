import React from "react";
import Link from "next/link";

import styles from "./header.module.scss";

const NavigationTree = ({ items }) => {
  return (
    <ul>
      {items &&
        items.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>{item.title}</Link>
            {!!item.items.length && <NavigationTree items={item.items} />}
          </li>
        ))}
    </ul>
  );
};

const Menu = (props) => {
  return (
    <nav className={styles.mainNav}>
      <NavigationTree items={props.navigation.renderNavigation} />
    </nav>
  );
};

export default Menu;
