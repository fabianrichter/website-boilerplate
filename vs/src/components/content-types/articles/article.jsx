import Text from "@/components/components/text/text";
import { Grid } from "@mui/material";
import React from "react";

const Article = ({ content }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <div>
          <h1>{content.attributes.title}</h1>
          <Text data={content.attributes.text} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Article;
