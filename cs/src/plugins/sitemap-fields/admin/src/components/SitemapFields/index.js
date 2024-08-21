import React from "react";

import {
  Box,
  Field,
  FieldInput,
  FieldLabel,
  NumberInput,
  TextInput,
} from "@strapi/design-system";

export const SitemapFields = ({ onChange, value }) => {
  return (
    <Box
      background="neutral0"
      borderColor="neutral150"
      hasRadius
      paddingBottom={4}
      paddingLeft={4}
      paddingRight={4}
      paddingTop={6}
      shadow="tableShadow"
    >
      <TextInput
        label="Priority"
        name="priority"
        type="number"
        step="0.1"
        min="0"
        max="1"
        value={value}
        onChange={(e) =>
          onChange({ target: { name: "priority", value: e.target.value } })
        }
      />
    </Box>
  );
};
