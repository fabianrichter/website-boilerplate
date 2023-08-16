import { useQuery } from "@apollo/client";
import Link from "next/link";
import React from "react";

import { EventsQuery } from "./events.gql";

const Events = (props) => {
  const { loading, error, data } = useQuery(EventsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {data.events.data.map((event, index) => (
        <div key={index}>
          <h2>{event.attributes.Title}</h2>
          <div dangerouslySetInnerHTML={{ __html: event.attributes.Description }} />
        </div>
      ))}
    </div>
  );
};

export default Page;
