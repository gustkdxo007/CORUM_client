import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import useStyles from "../utils/makeStyles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

const Home = () => {
  const classes = useStyles();
  const featuredPosts = [
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content."
    },
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content."
    },
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content."
    }
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Button size="small">Home</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            CORUM
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            LogIn
          </Button>
          <Button variant="outlined" size="small">
            Sign Up
          </Button>
        </Toolbar>

        <main>
          {/* Main featured post */}
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
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={2}>
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
          <Grid item xs={12} md={10} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={12}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Continue reading...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                    </Hidden>
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
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default Home;
