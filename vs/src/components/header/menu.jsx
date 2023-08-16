import { useQuery, gql } from "@apollo/client";
import React, { useEffect, useState } from "react";

import { Navigation } from "@/queries/navigation.gql";
import Link from "next/link";

const NavigationTree = ({ items }) => {
  return <ul>
    {items && items.map((item, index) => (
      <li key={index}>
        <Link href={item.related.attributes.slug}>{item.title}</Link>
        {!!item.items.length && (
          <NavigationTree items={item.items} />
        )}
      </li>
    ))}
  </ul>
}

const Menu = () => {
  const { loading, error, data } = useQuery(Navigation, {
    variables: {
      id: "2",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <NavigationTree items={data.renderNavigation} />
    </div>
  );
};

export default Menu;
