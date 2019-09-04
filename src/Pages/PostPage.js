import React, { Fragment } from "react";
import Header from "../components/Header";
import { Grid, Container, CssBaseline } from "@material-ui/core";
import PostBanner from "../components/PostBanner";
import Category from "../components/Category";
import Tag from "../components/Tag";
import Post from "../components/Post";

const PostPage = () => {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <CssBaseline />
        <Header />
        <PostBanner />

        <Grid container spacing={0}>
          <Grid item xs={12} md={2}>
            <Category />
            <Tag />
          </Grid>
          <Grid item xs={12} md={10}>
            <Post />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default PostPage;
