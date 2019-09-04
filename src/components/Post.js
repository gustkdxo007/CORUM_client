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

const Post = () => {
  const classes = useStyles();
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
            <Typography className={classes.user}>정진석</Typography>
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
                조회수 20
              </Typography>
            </Grid>
            <Grid item className={classes.temp}>
              <Typography className={classes.date} align="right">
                2019.09.04
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Typography
          fontFamily="Do Hyeon"
          variant="h3"
          className={classes.title}
        >
          타이틀이 필요합니다.
        </Typography>

        <ReactMarkdown
          className={classes.markdown}
          source="# CodeState"
          renderers={{ code: codeBlock }}
        />
      </Container>
    </Fragment>
  );
};

export default Post;
