import React from 'react';
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  Input,
  Link
} from '@material-ui/core';
import { Search, BorderColor } from '@material-ui/icons';

import { Link as RouterLink } from 'react-router-dom';
// utils
import useStyles from '../utils/makeStyles';

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
          align="right"
          noWrap
          className={classes.toolbarTitle}
        >
          CORUM
        </Typography>
        <Input />
        <IconButton>
          <Search />
        </IconButton>
        <IconButton>
          <BorderColor />
        </IconButton>
        <Button className={classes.loginButton} size="small">
          <Link
            component={RouterLink}
            to="/login"
            color="inherit"
            underline="none"
          >
            LOGIN
          </Link>
        </Button>
        <Button className={classes.signUpButton} size="small">
          <Link
            component={RouterLink}
            to="/signup"
            color="inherit"
            underline="none"
          >
            SIGN UP
          </Link>
        </Button>
      </Toolbar>
    </div>
  );
};

export default Header;
