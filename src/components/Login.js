import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "../utils/loginStyles";
import { Link as RouterLink, withRouter } from "react-router-dom";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.codestates.com/">
        CodeStates
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Login = ({ history }) => {
  const [inputs, setInputs] = useState({
    userId: "",
    password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
    console.log(inputs);
  };

  const handleLogin = async e => {
    let loginData = await axios.post(
      "http://52.79.228.73:3000/api/auth/login",
      inputs,
      {
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(inputs)
      }
    );
    if (!loginData.data.access_token) {
      console.log("로그인로그인", loginData);
      return;
    }

    console.log("로그인데이터", loginData);
    let localData = {
      userId: loginData.data.userId,
      access_token: loginData.data.access_token
    };
    localStorage.setItem("userId", JSON.stringify(localData));
    history.push("/");
    window.location.reload(true);
  };

  const handleSignup = () => {
    history.push("/signup");
  };

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container>
          <Grid item xs={8} md={2}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
          <Grid item xs={8} md={6}>
            <Typography component="h1" variant="h5" className={classes.title}>
              Sign In
            </Typography>
          </Grid>
        </Grid>
        <form className={classes.form} noValidate>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="userId"
            label="User ID"
            name="userId"
            autoComplete="userId"
            type="userId"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="아이디 저장"
            className={classes.storeId}
          />
          <Button className={classes.findPW} size="small">
            <Link
              component={RouterLink}
              to="/findPW"
              color="inherit"
              underline="none"
            >
              비밀번호 찾기
            </Link>
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Button
                color="default"
                className={classes.button}
                onClick={handleSignup}
              >
                회원가입
              </Button>
            </Grid>
            <Grid item xs>
              <Button color="default" className={classes.button}>
                구글 로그인
              </Button>
            </Grid>
            <Grid item xs>
              <Button color="default" className={classes.button}>
                깃헙 로그인
              </Button>
            </Grid>

            <Grid item></Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8} className={classes.copyright}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default withRouter(Login);
