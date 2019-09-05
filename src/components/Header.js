import React from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  Input,
  Link
} from "@material-ui/core";
import { Search, BorderColor } from "@material-ui/icons";

import { Link as RouterLink } from "react-router-dom";
// utils
import useStyles from "../utils/makeStyles";

import LoginBtn from "./LoginBtn";

// main
const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Toolbar className={classes.toolbar}>
        <Button size="small">
          <Link
            component={RouterLink}
            exact
            to="/"
            color="inherit"
            underline="none"
          >
            HOME
          </Link>
        </Button>
        <Button size="small">
          <Link
            component={RouterLink}
            to="/mypage"
            color="inherit"
            underline="none"
          >
            마이페이지
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

        <Link component={RouterLink} to="/edit">
          <IconButton>
            <BorderColor />
          </IconButton>
        </Link>

        <LoginBtn />
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
