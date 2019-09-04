import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import useStyles from "../utils/makeStyles";
const TempPostList = () => {
  const classes = useStyles();
  const featuredPosts = [
    {
      user: "이승재",
      title: "안녕하세요 코드스테이츠 DJ를 담당하는 이승재입니다.",
      subTitle: "안녕하세요 코드스테이츠 DJ를 담당하는 구일모입니다.",
      date: "2019-09-01",
      visit: 30,
      likeCount: 50
    },
    {
      user: "구일모",
      title: "CODESTATES DEVELOPER KOO IL MO",
      subTitle: "안녕하세요 코드스테이츠 DJ를 담당하는 구일모입니다.",
      date: "2019-09-01",
      visit: 30,
      likeCount: 50
    },
    {
      user: "구일모",
      title: "CODESTATES DEVELOPER KOO IL MO",
      subTitle: "안녕하세요 코드스테이츠 DJ를 담당하는 구일모입니다.",
      date: "2019-09-01",
      visit: 30,
      likeCount: 50
    },
    {
      user: "구일모",
      title: "CODESTATES DEVELOPER KOO IL MO",
      subTitle: "안녕하세요 코드스테이츠 DJ를 담당하는 구일모입니다.",
      date: "2019-09-01",
      visit: 30,
      likeCount: 50
    },
    {
      user: "구일모",
      title: "CODESTATES DEVELOPER KOO IL MO",
      subTitle: "안녕하세요 코드스테이츠 DJ를 담당하는 구일모입니다.",
      date: "2019-09-01",
      visit: 30,
      likeCount: 50
    }
  ];
  return (
    <div>
      {featuredPosts.map(post => (
        <Grid item key={post.title} xs={12} md={12}>
          <CardActionArea component="a" href="#">
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
                      {post.user}
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
                    조회수 {post.visit} 좋아요 {post.likeCount}
                  </Typography>

                  <Typography variant="subtitle1" paragraph>
                    {post.subTitle}
                  </Typography>

                  <Typography variant="subtitle2" color="textSecondary">
                    {post.date}
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

export default TempPostList;
