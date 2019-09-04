import React, { Fragment } from "react";
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

// main
const Home = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Banner />
        <Grid container spacing={8} className={classes.mainGrid}>
          <Grid item xs={12} md={2} className={classes.asideGrid}>
            <Category />
            <Tag />
          </Grid>
          <Grid item xs={12} md={9} className={classes.cardGrid}>
            <PostList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Home;
