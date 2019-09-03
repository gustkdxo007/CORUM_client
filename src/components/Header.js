import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from '../utils/makeStyles';
const Header = () => {
  const classes = useStyles();
  return (
    <div>
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
    </div>
  );
};

export default Header;
