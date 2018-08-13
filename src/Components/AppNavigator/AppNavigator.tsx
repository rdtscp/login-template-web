/* Components/AppNavigator/AppNavigator.tsx */

import * as React                                     from 'react';

/* Material-UI Comonents */
import AppBar                                         from '@material-ui/core/AppBar';
import Divider                                        from '@material-ui/core/Divider';
import Drawer                                         from '@material-ui/core/Drawer';
import Hidden                                         from '@material-ui/core/Hidden';
import IconButton                                     from '@material-ui/core/IconButton';
import List                                           from '@material-ui/core/List';
import Slide                                          from '@material-ui/core/Slide';
import Toolbar                                        from '@material-ui/core/Toolbar';
import Typography                                     from '@material-ui/core/Typography';
import MenuIcon                                       from '@material-ui/icons/Menu';
import SettingsRoundedIcon                            from '@material-ui/icons/SettingsRounded';

/* Project Components */
import SettingsMenu                                   from '../SettingsMenu';

/* Projeject Typess */
import { AppNavigatorProps, AppNavigatorState }       from './Types';

class AppNavigator extends React.Component<AppNavigatorProps, AppNavigatorState> {

  constructor(props: AppNavigatorProps) {
    super(props);
    this.state = {
      activePane:     'Select A Pane',
      mobileOpen:     false,
      mobileWasOpen:  true,
      settingsOpen:   false,
    };
  }
  
  public handleDrawerToggle = () => {
    this.setState(state => ({
      mobileOpen:     !state.mobileOpen,
      mobileWasOpen:  !state.mobileOpen,
    }));
  };

  public toggleSettings = () => {
    if (this.state.settingsOpen === true) {
      this.setState({
        mobileOpen:   this.state.mobileWasOpen,
        settingsOpen: false,
      })
    }
    else if (this.state.mobileOpen) {
      this.setState({
        mobileOpen:     false,
        mobileWasOpen:  true,
        settingsOpen: true
      });
    }
    else {
      this.setState({
        mobileOpen:     false,
        mobileWasOpen:  false,
        settingsOpen:   true,  
      })
    }
  };

  public changeDrawer(event: React.MouseEvent<HTMLElement>) {
    alert('Clicked Drawer: ' + event.currentTarget.id);
  }

  public render() {
    const { classes, currentUser } = this.props;

    /* Calculate State */
    const drawer = (
      <div>
        <div className={(this.state.mobileOpen) ? classes.drawerHeader : classes.toolbar}>
          <Typography variant="title" color="inherit" noWrap={true}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <p className={classes.drawerTitle} style={{flexGrow: 1, color: (this.state.mobileOpen)?'white':'black'}}>
                {currentUser.username}
              </p>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                style={{margin: 9, color: (this.state.mobileOpen) ? 'white' : 'black'}}
                onClick={this.toggleSettings}
              >
                <SettingsRoundedIcon />
              </IconButton>
            </div>
          </Typography>
        </div>
        <Divider />
        <List>
          {/*  */}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <Slide direction="up" in={this.state.settingsOpen} mountOnEnter={true} unmountOnExit={true}>
          <div className={classes.settingsPopup}>
            <SettingsMenu closeSettings={this.toggleSettings} />
          </div>
        </Slide>
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
              {this.state.activePane}
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
            <Typography variant="title" gutterBottom={true}>
              Your App Here
            </Typography>
        </main>
      </div>
    );

  }

}

export default AppNavigator;