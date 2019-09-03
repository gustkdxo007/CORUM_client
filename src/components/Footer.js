import React from 'react';
import useStyles from '../utils/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
const Footer = () => {
  const classes = useStyles();
  return (
    <div>
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
    </div>
  );
};

export default Footer;
