import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    margin: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.gray
  },
  title: {
    paddingTop: theme.spacing(0.8),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(1)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  storeId: {
    fontSize: "0.5rem"
  },
  findPW: {
    marginLeft: theme.spacing(12),
    padding: theme.spacing(0.5)
  },
  submit: {
    margin: theme.spacing(3, 0, 4)
  },
  copyright: {
    marginBottom: theme.spacing(5)
  }
}));

export default useStyles;
