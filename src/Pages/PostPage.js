import React, { Fragment } from "react";
import Header from "../components/Header";
import { Grid, Container, CssBaseline } from "@material-ui/core";
import PostBanner from "../components/PostBanner";
import Category from "../components/Category";
import Tag from "../components/Tag";
import Post from "../components/Post";
import useRequest from "../hooks/useRequest";

const PostPage = ({ match }) => {
  const [postData, loading, error] = useRequest(
    `http://52.79.228.73:3000/readPost/${match.params.id}`
  );
  const LS_DATA = JSON.parse(localStorage.getItem("userId"));

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
  return (
    <Fragment>
      <Container maxWidth="lg">
        <CssBaseline />
        <Header userId={LS_DATA.userId} />
        <PostBanner postName={postData.data.category} />

        <Grid container spacing={0}>
          <Grid item xs={12} md={2}>
            <Category />
            <Tag />
          </Grid>
          <Grid item xs={12} md={10}>
            <Post match={match} postContent={postData.data} />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default PostPage;
