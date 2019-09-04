import React from "react";
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
import { Link as RouterLink } from "react-router-dom";

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

const Login = () => {
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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            autoFocus
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
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Button color="default" className={classes.button}>
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

export default Login;
