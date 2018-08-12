import * as React                                       from 'react';

/* Component Imports */
import AppBar                                           from '@material-ui/core/AppBar';
import Divider                                          from '@material-ui/core/Divider';
import Drawer                                           from '@material-ui/core/Drawer';
import Hidden                                           from '@material-ui/core/Hidden';
import IconButton                                       from '@material-ui/core/IconButton';
import List                                             from '@material-ui/core/List';
import ListItem                                         from '@material-ui/core/ListItem';
import ListItemIcon                                     from '@material-ui/core/ListItemIcon';
import ListItemText                                     from '@material-ui/core/ListItemText';
import Toolbar                                          from '@material-ui/core/Toolbar';
import Typography                                       from '@material-ui/core/Typography';
import DeleteIcon                                       from '@material-ui/icons/Delete';
import DraftsIcon                                       from '@material-ui/icons/Drafts';
import MailIcon                                         from '@material-ui/icons/Mail';
import MenuIcon                                         from '@material-ui/icons/Menu';
import InboxIcon                                        from '@material-ui/icons/MoveToInbox';
import ReportIcon                                       from '@material-ui/icons/Report';
import SendIcon                                         from '@material-ui/icons/Send';
import StarIcon                                         from '@material-ui/icons/Star';

import DeviceList                                       from '../DeviceList';

/* Type Imports */
import { AppNavigatorProps, AppNavigatorState }         from './Types';

/* Import Functionality */
const otherMailFolderListItems = (
  <div>
    <ListItem button={true}>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="All mail" />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem>
  </div>
);
const mailFolderListItems = (
  <div>
    <ListItem button={true}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
  </div>
);

class AppNavigator extends React.Component<AppNavigatorProps, AppNavigatorState> {

  constructor(props: AppNavigatorProps) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }
  
  public handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  public render() {
    const { classes } = this.props;

    const drawer = (
      <div>
        <div className={(this.state.mobileOpen) ? classes.drawerHeader : classes.toolbar}>
          <Typography variant="title" color="inherit" noWrap={true}>
            <p style={{marginLeft: 24, color: (this.state.mobileOpen)?'white':'black'}}> Settings </p>
          </Typography>
        </div>
        <Divider />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap={true}>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp={true}>
          <Drawer
            variant="temporary"
            anchor={'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown={true} implementation="css">
          <Drawer
            variant="permanent"
            open={true}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {/* <div className={classes.rightPaneContainer}> */}
            <div className={classes.devicesContainer}>
              <DeviceList devices={this.props.devices} />
            </div>
          {/* </div> */}
        </main>
      </div>
    );

  }

}

export default AppNavigator;