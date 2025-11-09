/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import requests from "../../utils/requests";
import {
  Button,
  Checkbox,
  ContentLayout,
  Divider,
  HeaderLayout,
  Main,
  Textarea,
  Typography,
} from "@strapi/design-system";
import { HeadingThree, HeadingTwo, Text } from "@strapi/icons";

const HomePage = () => {
  const [schema, setSchema] = useState({
    maintenanceMode: false,
    maintenanceModeText: "",
  });

  useEffect(() => {
    requests.getWebsiteSettings().then(({ data }) => {
      console.log(data);
      setSchema(data);
    });
  }, []);

  return (
    <Main labelledBy="title">
      <HeaderLayout id="title" title="Website Settings"></HeaderLayout>
      <ContentLayout>
        <Checkbox
          style={{ marginBottom: "20px" }}
          onValueChange={() =>
            setSchema({ ...schema, maintenanceMode: !schema.maintenanceMode })
          }
          value={schema.maintenanceMode}
        >
          Wartungsmodus
        </Checkbox>
        <Textarea
          label="Text für den Wartungsmodus"
          hint="Dieser Text wird angezeigt, wenn sich die Website im Wartungsmodus befindet."
          value={schema.maintenanceModeText}
        ></Textarea>
      </ContentLayout>
    </Main>
  );
};

export default HomePage;
