import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import useStyles from "../utils/makeStyles";

const PostList = ({ postData, match }) => {
  console.log(postData);
  let url = "/category/post";
  const classes = useStyles();
  return (
    <div>
      {postData.map(post => (
        <Grid item key={post.id} xs={12} md={12}>
          <CardActionArea component="a" href={`${url}/${post.id}`}>
            {/*{`${url}/${post.id}`}*/}
            <Card className={classes.card}>
              <Hidden xsDown>
                <Grid item className={classes.cardLeft}>
                  <Grid item>
                    <CardMedia
                      className={classes.cardMedia}
                      image={
                        !post.user.userImage
                          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6hz-n7NfgHufUzvz9-lGcRUxuZoi1jmXPmUx89DuTRwPHaC8"
                          : post.user.userImage
                      }
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
