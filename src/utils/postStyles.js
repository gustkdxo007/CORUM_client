import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  user: {
    marginTop: theme.spacing(4),
    fontWeight: "600"
  },
  date: {
    marginTop: theme.spacing(2),
    color: "gray"
  },
  visit: {
    marginTop: theme.spacing(2),
    color: "gray"
    // marginLeft: theme.spacing(1)
  },
  like: {
    marginTop: theme.spacing(1.5)
  },
  title: {
    margin: theme.spacing(2),
    borderBottom: "1px solid lightgray",
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  markdown: {
    // border: "1px solid lightgray",
    margin: theme.spacing(2),
    padding: theme.spacing(0, 2)
  },
  temp: {
    // border: "1px solid gray"
  }
}));

export default useStyles;
