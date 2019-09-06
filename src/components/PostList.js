import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import useStyles from "../utils/makeStyles";

// createdAt: "2019-09-06T01:34:49.000Z"
// id: 2
// like_count: 0
// subTitle: "말씀을 드려볼까 합니다."
// title: "코드스테이츠 구일모입니다."
// updatedAt: "2019-09-06T01:34:57.000Z"
// user: {nickname: "dddd", userImage: null}
// visit_count: 1
const PostList = ({ postData }) => {
  const classes = useStyles();
  return (
    <div>
      {postData.map(post => (
        <Grid item key={post.id} xs={12} md={12}>
          <CardActionArea component="a" href="/postpage/1">
            <Card className={classes.card}>
              <Hidden xsDown>
                <Grid item className={classes.cardLeft}>
                  <Grid item>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                  </Grid>
                  <Grid item>
                    <Typography className={classes.cardUser}>
                      {post.user.nickname}
                    </Typography>
                  </Grid>
                </Grid>
              </Hidden>
              <div className={classes.cardDetails}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h4" className={classes.cardTitle}>
                    {post.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    display="block"
                    align="right"
                  >
                    조회수 {post.visit_count} 좋아요 {post.like_count}
                  </Typography>

                  <Typography variant="subtitle1" paragraph>
                    {post.subTitle}
                  </Typography>

                  <Typography variant="subtitle2" color="textSecondary">
                    {post.createdAt.slice(0, 10)}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </div>
  );
};

export default PostList;
