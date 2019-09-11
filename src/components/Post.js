/* eslint-disable */
import React, { Fragment } from "react";
import {
  Grid,
  Container,
  Typography,
  Avatar,
  IconButton
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import useStyles from "../utils/postStyles";
import ReactMarkdown from "react-markdown";
import codeBlock from "../utils/codeBlock";
import useRequest from "../hooks/useRequest";

const Post = ({ postContent, match }) => {
  const classes = useStyles();
  // console.log("리스트", postContent.category);
  // console.log("포스트데이터", postData);
  const [postList, loading, error] = useRequest(
    `http://52.79.228.73:3000/readPostListbyCategory/${postContent.category}`
  );

  // TODO: error
  if (error) {
    return (
      <div>
        <h1>ERROR 404</h1>
      </div>
    );
  }
  // TODO: when postData is null, return null
  if (!postList) return null;
  console.log("내용", postList.data);
  let data = postList.data.filter(data => "" + data.id === match.params.id);
  console.log(data);
  return (
    <Fragment>
      <Container>
        <Grid container>
          <Grid item xs={12} md={1} className={classes.temp}>
            <Avatar
              alt="Remy Sharp"
              src="https://thumbs.dreamstime.com/b/default-male-avatar-profile-picture-icon-grey-man-photo-placeholder-vector-illustration-88414414.jpg"
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={12} md={1} className={classes.temp}>
            <Typography className={classes.user}>
              {data[0].user.nickname}
            </Typography>
          </Grid>
          <Grid item xs={12} md={1} className={classes.temp}>
            <IconButton className={classes.like} color="secondary">
              <FavoriteIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={7} className={classes.temp}></Grid>
          <Grid item xs={12} md={2} className={classes.temp}>
            <Grid item className={classes.temp}>
              <Typography className={classes.visit} align="right">
                조회수 {data[0].visit_count}
              </Typography>
            </Grid>
            <Grid item className={classes.temp}>
              <Typography className={classes.date} align="right">
                {data[0].createdAt.slice(0, 10)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Typography
          fontFamily="Do Hyeon"
          variant="h3"
          className={classes.title}
        >
          {data[0].title}
        </Typography>

        <ReactMarkdown
          className={classes.markdown}
          source={`# ${postContent.contents}`}
          renderers={{ code: codeBlock }}
        />
      </Container>
    </Fragment>
  );
};

export default Post;
