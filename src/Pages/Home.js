import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import useStyles from '../utils/makeStyles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Header from '../components/Header';

const Home = () => {
  const classes = useStyles();
  const featuredPosts = [
    {
      user: '구일모',
      title: 'CODESTATES DEVELOPER KOO IL MO',
      subTitle: '안녕하세요 코드스테이츠 DJ를 담당하는 구일모입니다.',
      date: '2019-09-01',
      visit: 30,
      likeCount: 50
    }
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />

        <main>
          <Paper className={classes.mainFeaturedPost}>
            <div className={classes.overlay} />
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h2"
                color="inherit"
                align="center"
              >
                CODESTATES DEV FORUM
              </Typography>
            </div>
          </Paper>
        </main>
        <Grid container spacing={8} className={classes.mainGrid}>
          <Grid item xs={12} md={2} className={classes.categoryGrid}>
            {/* 카테고리 */}
            <Grid item>
              <List className={classes.link}>
                <ListItem button className={classes.linkItem}>
                  <Link
                    component={RouterLink}
                    to="/development"
                    color="inherit"
                    className={classes.toolbarLink}
                    underline="none"
                  >
                    Development
                  </Link>
                </ListItem>
                <ListItem button className={classes.linkItem}>
                  <Link
                    component={RouterLink}
                    to="/project"
                    color="inherit"
                    className={classes.toolbarLink}
                    underline="none"
                  >
                    Co-Project
                  </Link>
                </ListItem>
                <ListItem button className={classes.linkItem}>
                  <Link
                    component={RouterLink}
                    to="/newestit"
                    color="inherit"
                    className={classes.toolbarLink}
                    underline="none"
                  >
                    Newest IT
                  </Link>
                </ListItem>
                <ListItem button className={classes.linkItem}>
                  <Link
                    component={RouterLink}
                    to="/hottechissue"
                    color="inherit"
                    className={classes.toolbarLink}
                    underline="none"
                  >
                    Hot Tech Issue
                  </Link>
                </ListItem>
                <ListItem button className={classes.linkItem}>
                  <Link
                    component={RouterLink}
                    to="/mycompany"
                    color="inherit"
                    className={classes.toolbarLink}
                    underline="none"
                  >
                    My Company
                  </Link>
                </ListItem>
              </List>
            </Grid>
            {/* 태그 */}
            <Grid item>
              <List className={classes.tag}>
                <ListItem button className={classes.tagItem}>
                  <Link
                    component={RouterLink}
                    to="/development"
                    color="inherit"
                    className={classes.toolbarLink}
                    underline="none"
                  >
                    #JavaScript
                  </Link>
                </ListItem>
                <ListItem button className={classes.tagItem}>
                  <Link
                    component={RouterLink}
                    to="/project"
                    color="inherit"
                    className={classes.toolbarLink}
                    underline="none"
                  >
                    #CodeStates
                  </Link>
                </ListItem>
                <ListItem button className={classes.tagItem}>
                  <Link
                    component={RouterLink}
                    to="/newestit"
                    color="inherit"
                    className={classes.toolbarLink}
                    underline="none"
                  >
                    #Node
                  </Link>
                </ListItem>
                <ListItem button className={classes.tagItem}>
                  <Link
                    component={RouterLink}
                    to="/hottechissue"
                    color="inherit"
                    className={classes.toolbarLink}
                    underline="none"
                  >
                    #React
                  </Link>
                </ListItem>
                <ListItem button className={classes.tagItem}>
                  <Link
                    component={RouterLink}
                    to="/mycompany"
                    color="inherit"
                    className={classes.toolbarLink}
                    underline="none"
                  >
                    #Redux
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Grid item xs={12} md={9} className={classes.cardGrid}>
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
          </Grid>
        </Grid>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            made by team Codenation
          </Typography>
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default Home;
