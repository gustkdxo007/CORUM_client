import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import useStyles from "../utils/makeStyles";

const Banner = () => {
  const classes = useStyles();
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
            CODESTATES DEV FORUM
          </Typography>
        </div>
      </Paper>
    </Fragment>
  );
};

export default Banner;
