import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import useStyles from "../utils/makeStyles";
const Category = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid item>
        <List className={classes.link}>
          <ListItem button className={classes.linkItem}>
            <Link
              component={RouterLink}
              to="/post/development"
              color="inherit"
              className={classes.toolbarLink}
              underline="none"
            >
              Development
            </Link>
          </ListItem>
          <ListItem button className={classes.linkItem}>
            <Link
              component={RouterLink}
              to="/post/project"
              color="inherit"
              className={classes.toolbarLink}
              underline="none"
            >
              Co-Project
            </Link>
          </ListItem>
          <ListItem button className={classes.linkItem}>
            <Link
              component={RouterLink}
              to="/post/newestit"
              color="inherit"
              className={classes.toolbarLink}
              underline="none"
            >
              Newest IT
            </Link>
          </ListItem>
          <ListItem button className={classes.linkItem}>
            <Link
              component={RouterLink}
              to="/post/hottechissue"
              color="inherit"
              className={classes.toolbarLink}
              underline="none"
            >
              Hot Tech Issue
            </Link>
          </ListItem>
          <ListItem button className={classes.linkItem}>
            <Link
              component={RouterLink}
              to="/post/mycompany"
              color="inherit"
              className={classes.toolbarLink}
              underline="none"
            >
              My Company
            </Link>
          </ListItem>
        </List>
      </Grid>
    </div>
  );
};

export default Category;
