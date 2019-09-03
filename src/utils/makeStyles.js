import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  // 상단 툴바
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(10)
    // margin: theme.spacing(3)
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  cardGrid: {
    // marginBottom: theme.spacing(3)
  },
  card: {
    display: 'flex',
    marginBottom: theme.spacing(3)
  },
  cardDetails: {
    flex: 1
  },
  cardLeft: {
    paddingRight: theme.spacing(2),
    borderRight: '1px solid rgba(0, 0, 0, 0.05)'
  },
  cardMedia: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2)
  },
  cardUser: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.2),
    border: 'none',
    borderRadius: '8px',
    background: 'rgba(0, 0, 0, 0.05)'
  },
  cardContent: {
    margin: theme.spacing(2)
  },
  cardTitle: {
    fontSize: '2rem',
    paddingBottom: theme.spacing(3)
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  },
  categoryGrid: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(4)
  },
  link: {
    width: 170,
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  linkItem: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  tag: {
    width: 170
  },
  tagItem: {
    color: 'lightgray',
    background: 'white',
    marginTop: theme.spacing(3),
    boxShadow: `0 3px 3px rgba(0, 0, 0, 0.3)`,
    borderRadius: '20px'
  }
}));

export default useStyles;
