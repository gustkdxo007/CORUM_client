import React, { Fragment, useState } from "react";
import {
  Grid,
  Container,
  CssBaseline,
  Typography,
  Avatar,
  Link,
  TextField,
  Button,
  Box
  // Checkbox,
  // FormControlLabel
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "../utils/signUpStyles";
import axios from "axios";
import SimpleSnackbar from "../components/SnackBar/SimpleSnackbar";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.codestates.com/">
        codestate
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const SignUpPage = ({ history }) => {
  const classes = useStyles();
  const [signUpInfo, setSignUpInfo] = useState({
    userId: "",
    nickname: "",
    password: ""
  });
  // TODO

  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  //

  const handleInput = e => {
    const { name, value } = e.target;
    setSignUpInfo(oldValue => ({
      ...oldValue,
      [name]: value
    }));
    console.log(signUpInfo);
  };

  const handleSignUp = async () => {
    if (
      !signUpInfo.userId.length === 0 ||
      !signUpInfo.userId.length ||
      !signUpInfo.nickname.length
    ) {
      return;
    }
    try {
      await axios
        .post("http://52.79.228.73:3000/api/auth/register", signUpInfo)
        .then(res => {
          if (res.message === "userId exists") return;
        });
      console.log(signUpInfo);
      history.push("/");
    } catch (e) {
      setOpen(true);
    }
  };
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="ID"
                  name="userId"
                  variant="outlined"
                  required
                  fullWidth
                  id="ID"
                  label="ID"
                  autoFocus
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nickname"
                  label="NickName"
                  name="nickname"
                  autoComplete="email"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleInput}
                />
              </Grid>
              {/*
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Accept CORUM Sign Up"
                />
              </Grid>
               */}
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      <SimpleSnackbar
        open={open}
        handleClick={handleClick}
        handleClose={handleClose}
      />
    </Fragment>
  );
};

export default SignUpPage;
