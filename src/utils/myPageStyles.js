import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  mypage: {
    margin: theme.spacing(8, 2),
    fontWeight: 700
  },
  avatar: {
    margin: theme.spacing(2),
    width: "10rem",
    height: "10rem"
  },
  userId: {
    marginTop: theme.spacing(13),
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid lightgray"
  },
  textField: {
    margin: theme.spacing(2)
  },
  saveButton: {
    fontSize: "1.5rem",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(1, 10)
  },
  backButton: {
    fontSize: "1.5rem",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(1, 10)
  },
  textArea: {
    width: "100%",
    fontSize: "1.3em",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    border: "none",
    borderRadius: "10px",
    outline: "none",
    resize: "none",
    overflow: "none",
    minHeight: "450px",
    background: "rgba(255, 255, 255, 0.9)",
    border: "1px solid rgba(0, 0, 0, 0.05)"
  }
}));

export default useStyles;
