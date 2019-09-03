import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useStyles from '../utils/makeStyles';

const Tag = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid item>
        <List className={classes.tag}>
          <ListItem button className={classes.tagItem}>
            <Link
              component={RouterLink}
              to="/development"
              color="inherit"
              className={classes.toolbarLink}
              underline="none"
            >
              #JavaScript
            </Link>
          </ListItem>
          <ListItem button className={classes.tagItem}>
            <Link
              component={RouterLink}
              to="/project"
              color="inherit"
              className={classes.toolbarLink}
              underline="none"
            >
              #CodeStates
            </Link>
          </ListItem>
          <ListItem button className={classes.tagItem}>
            <Link
              component={RouterLink}
              to="/newestit"
              color="inherit"
              className={classes.toolbarLink}
              underline="none"
            >
              #Node
            </Link>
          </ListItem>
          <ListItem button className={classes.tagItem}>
            <Link
              component={RouterLink}
              to="/hottechissue"
              color="inherit"
              className={classes.toolbarLink}
              underline="none"
            >
              #React
            </Link>
          </ListItem>
          <ListItem button className={classes.tagItem}>
            <Link
              component={RouterLink}
              to="/mycompany"
              color="inherit"
              className={classes.toolbarLink}
              underline="none"
            >
              #Redux
            </Link>
          </ListItem>
        </List>
      </Grid>
    </div>
  );
};

export default Tag;
