import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// ! DO NOT REMOVE MODULES
// eslint-disable-next-line
import IconButton from "@material-ui/core/IconButton";
// eslint-disable-next-line
import SearchIcon from "@material-ui/icons/Search";
// eslint-disable-next-line
import Paper from "@material-ui/core/Paper";
// eslint-disable-next-line
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// utils
import useStyles from "../utils/makeStyles";

// components
import Header from "../components/Header";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Tag from "../components/Tag";
import PostList from "../components/PostList";
import Footer from "../components/Footer";
import TempPostList from "../components/TempPostList";

// main
const Home = () => {
  const classes = useStyles();

  return (
    <Router>
      <Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header />
          <Banner />
          <Switch>
            <Grid container spacing={8} className={classes.mainGrid}>
              <Grid item xs={12} md={2} className={classes.asideGrid}>
                <Category />
                <Tag />
              </Grid>
              <Grid item xs={12} md={9} className={classes.cardGrid}>
                <Route exact path="/" component={PostList} />
                <Route path="/post/development" component={TempPostList} />
              </Grid>
            </Grid>
          </Switch>
        </Container>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default Home;
