import React from "react";
import { Toolbar, Typography, Button, Link } from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom";
// utils
import useStyles from "../../utils/makeStyles";

// main
const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Toolbar className={classes.toolbar}>
        <Button size="small">
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            HOME
          </Link>
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          CORUM
        </Typography>
      </Toolbar>
    </div>
  );
};

export default Header;
