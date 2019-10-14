import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import useStyles from "../utils/postStyles";

const PostBanner = ({ postName }) => {
  const classes = useStyles();
  let categoryName = {
    development: "Development",
    project: "Co-Project",
    newestit: "Newest IT",
    hottechissue: "Hot Tech Issue",
    mycompany: "My Company"
  };
  return (
    <Fragment>
      <Paper className={classes.mainFeaturedPost}>
        <div className={classes.overlay} />
        <div className={classes.mainFeaturedPostContent}>
          <Typography
            component="h1"
            variant="h2"
            color="inherit"
            align="center"
          >
            {categoryName[postName]}
          </Typography>
        </div>
      </Paper>
    </Fragment>
  );
};

export default PostBanner;
