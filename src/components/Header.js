import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
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
          align="right"
          noWrap
          className={classes.toolbarTitle}
        >
          CORUM
        </Typography>
        <Input />
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button className={classes.loginButton} size="small">
          LogIn
        </Button>
        <Button className={classes.signUpButton} size="small">
          Sign Up
        </Button>
      </Toolbar>
    </div>
  );
};

export default Header;
