import { Theme } from '@material-ui/core/styles';

import { createStyles }         from '@material-ui/core';
import { WithStyles }           from '@material-ui/core/styles/withStyles';

const drawerWidth = 240;

const appNavigatorClasses = (theme: Theme) => createStyles({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    position: 'absolute',
  },
  content: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  devicesContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 355,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    backgroundColor: theme.palette.primary.main,
  },
  drawerPaper: {
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
    width: drawerWidth,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  root: {
    display: 'flex',
    flexGrow: 1,
    // height: 430,
    // overflow: 'hidden',
    position: 'relative',
    // width: '100%',
    zIndex:1,
  },
  toolbar: theme.mixins.toolbar,
});

interface IAppNavigatorStyle extends WithStyles<typeof appNavigatorClasses> {};

export { appNavigatorClasses, IAppNavigatorStyle };