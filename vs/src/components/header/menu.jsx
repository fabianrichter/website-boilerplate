import React from "react";
import Link from "next/link";

import styles from "./header.module.scss";

const NavigationTree = ({ items, level, onClick }) => {
  return (
    <ul className={[styles.ul, styles[`lvl-${level}`]].join(" ")}>
      {items &&
        items.map((item, index) => (
          <li key={index}>
            <Link scroll={false} href={item.path} className={styles.a} onClick={onClick}>
              {item.title}
            </Link>
            {!!item.items.length && <NavigationTree items={item.items} level={level + 1} onClick={onClick} />}
          </li>
        ))}
    </ul>
  );
};

const Menu = (props) => {
  return (
    <nav className={styles.mainNav}>
      <NavigationTree onClick={props.onClose} items={props.navigation.renderNavigation} level={0} />
    </nav>
  );
};

export default Menu;
