import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  submitButton: {
    margin: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontSize: '1.3rem',
    fontWeight: '600'
  },
  formControl: {
    margin: theme.spacing(2, 1)
  },
  saveButton: {
    margin: theme.spacing(1.5, 1),
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontSize: '1.3rem',
    fontWeight: '600'
  }
}));

export default useStyles;
