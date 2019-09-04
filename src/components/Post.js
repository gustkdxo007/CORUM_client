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

const Post = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container>
        <Grid container>
          <Grid item xs={16} md={1}>
            <Avatar
              alt="Remy Sharp"
              src="https://thumbs.dreamstime.com/b/default-male-avatar-profile-picture-icon-grey-man-photo-placeholder-vector-illustration-88414414.jpg"
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={16} md={1}>
            <Typography className={classes.user} align="center">
              정진석
            </Typography>
          </Grid>
          <Grid item xs={16} md={1}>
            <Typography className={classes.date}>2019.09.04</Typography>
          </Grid>
          <Grid item xs={16} md={3}>
            <IconButton color="secondary">
              <FavoriteIcon fontSize="large" />
              <FavoriteBorderIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <Typography>타이틀이 필요합니다.</Typography>
        <Typography>내용이 필요합니다.</Typography>
      </Container>
    </Fragment>
  );
};

export default Post;
