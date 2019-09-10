import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useRequest from "../hooks/useRequest";
// ! DO NOT REMOVE MODULES
/* eslint-disable */
import {
  IconButton,
  Typography,
  Paper,
  CssBaseline,
  Grid,
  Container
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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
import axios from "axios";

// main
const Home = ({ match }) => {
  const [userInfo, setUserInfo] = useState({
    userId: "",
    token: ""
  }); // userId;
  console.log("카테고리이름", match.params.categoryname);
  const classes = useStyles();
  const url = () => {
    if (match.path === "/") {
      return "readAllPostList";
    }

    if (match.path === "/category/:categoryname") {
      return `readPostListbyCategory/${match.params.categoryname}`;
    }
  };
  const [postData, loading, error] = useRequest(
    `http://52.79.228.73:3000/${url()}`
  );
  console.log("포스트데이터", postData);
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userId"));
    if (userData) {
      setUserInfo(oldValue => ({
        ...oldValue,
        userId: userData.userId,
        token: userData.token
      }));
    }
  }, []);
  //  TODO: loading;
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  // TODO: error
  if (error) {
    return (
      <div>
        <h1>ERROR 404</h1>
      </div>
    );
  }
  // TODO: when postData is null, return null
  if (!postData) return null;
  // console.log("데이터", postData.data);
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        {/* <Router> */}
        <Banner />
        <Grid container spacing={8} className={classes.mainGrid}>
          <Grid item xs={12} md={2} className={classes.asideGrid}>
            <Category />
            <Tag />
          </Grid>
          <Grid item xs={12} md={9} className={classes.cardGrid}>
            <Route
              exact
              path="/"
              render={() => <PostList postData={postData.data} match={match} />}
            />
            <Switch>
              <Route
                exact
                path={`/category/${match.params.categoryname}`}
                render={() => (
                  <PostList postData={postData.data} match={match} />
                )}
              />
              <Route path="/tags/:tagname" component={TempPostList} />
            </Switch>
          </Grid>
        </Grid>
        {/* </Router> */}
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Home;
