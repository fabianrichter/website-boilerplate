import React from "react";
import Link from "next/link";

const NavigationTree = ({ items }) => {
  return <ul>
    {items && items.map((item, index) => (
      <li key={index}>
        <Link href={item.path}>{item.title}</Link>
        {!!item.items.length && (
          <NavigationTree items={item.items} />
        )}
      </li>
    ))}
  </ul>
}

const Menu = (props) => {
  return (
    <div>
      <NavigationTree items={props.navigation.renderNavigation} />
    </div>
  );
};

export default Menu;
