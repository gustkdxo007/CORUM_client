import React, { Fragment } from "react";
import Header from "../components/Header";
import { Grid, Container, CssBaseline } from "@material-ui/core";
import PostBanner from "../components/PostBanner";
import Category from "../components/Category";
import Tag from "../components/Tag";
import Post from "../components/Post";
import useRequest from "../hooks/useRequest";

const PostPage = ({ match }) => {
  // console.log("포스트페이지 매치", match);
  const [postData, loading, error] = useRequest(
    `http://52.79.228.73:3000/readPost/${match.params.id}`
  );

  // TODO: loading
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
  // console.log("아이디", postData);
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
            <Post
              match={match}
              postContent={postData.data}
              // postContent={postContent.data}
            />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default PostPage;
