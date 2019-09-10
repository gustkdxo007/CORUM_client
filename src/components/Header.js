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

import { Link as RouterLink, withRouter } from "react-router-dom";
// utils
import useStyles from "../utils/makeStyles";

import LoginBtn from "./LoginBtn";
import axios from "axios";

// main
const Header = ({ history, userId }) => {
  const classes = useStyles();
  const handleLogout = async () => {
    localStorage.setItem("userId", null);
    await axios
      .post("http://52.79.228.73:3000/api/auth/logout")
      .then(() => window.location.reload(true));
  };
  return (
    <div>
      <Toolbar className={classes.toolbar}>
        <Button size="small" onClick={() => history.push("/")}>
          HOME
        </Button>
        {userId && (
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
        )}
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

        {!userId && <LoginBtn />}
        {!userId && (
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
        )}
        {userId && (
          <Button
            className={classes.signUpButton}
            size="small"
            onClick={handleLogout}
          >
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              underline="none"
            >
              LogOut
            </Link>
          </Button>
        )}
      </Toolbar>
    </div>
  );
};

export default withRouter(Header);
