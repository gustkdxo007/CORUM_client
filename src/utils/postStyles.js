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
    marginTop: theme.spacing(4),
    color: "gray"
  }
}));

export default useStyles;
