import * as React from 'react';

/* Theme */
// import AppBar                                         from '@material-ui/core/AppBar';
import CircularProgress                               from '@material-ui/core/CircularProgress';
import CssBaseline                                    from '@material-ui/core/CssBaseline';
// import IconButton                                     from '@material-ui/core/IconButton';
import LinearProgress                                 from '@material-ui/core/LinearProgress';
import { MuiThemeProvider }                           from '@material-ui/core/styles';
// import Toolbar                                        from '@material-ui/core/Toolbar';
// import Typography                                     from '@material-ui/core/Typography';
// import MenuIcon                                       from '@material-ui/icons/Menu';
import { appTheme }                                   from './Theme';

/* Components */
import AppNavigator                                   from '../Components/AppNavigator';
// import DeviceList                                     from '../Components/DeviceList';
import LoginForm                                      from '../Components/LoginForm';

/* Types */
import { AppProps }                                   from './Types';

/* Logic */

class App extends React.Component<AppProps> {

  public render() {
    const { authState, classes, currentUser }   = this.props;

    const localAuthToken: string | null         = localStorage.getItem('authToken');

    /* Device thinks its Authenticated, but the State AuthToken not set. */
    if (localAuthToken !== null && authState.authStatus === false) {
      this.props.setAuthStateAction(localAuthToken);
      return (
        <MuiThemeProvider theme={appTheme}>
          <CssBaseline />
          <div className={classes.loadingContainer}>
            <div style={{width: 300}}>
              <LinearProgress color="primary"/>
            </div>
          </div>
        </MuiThemeProvider>
      );
    }
    else if (authState.authStatus === false) {
      return (
        <MuiThemeProvider theme={appTheme}>
          <CssBaseline />
            <LoginForm />
        </MuiThemeProvider>
      );
    }
    else if (authState.authStatus === true && currentUser.id === '') {
      // this.props.setCurrentUserAction(authState.authToken);
      return (
        <MuiThemeProvider theme={appTheme}>
          <CssBaseline />
          <div className={classes.loadingContainer}>
            <div style={{width: 56.56}}>
              <CircularProgress color="primary"/>
            </div>
          </div>
        </MuiThemeProvider>
      );
    }
    else {
      // const { devices } = currentUser;
      return (
        <MuiThemeProvider theme={appTheme}>
          <CssBaseline />
          <AppNavigator />
        </MuiThemeProvider>
      );
    }
    // else {
    //   const { devices } = currentUser;
    //   return (
    //     <MuiThemeProvider theme={appTheme}>
    //       <CssBaseline />
    //       <div className={classes.root}>
    //         <AppBar position="static">
    //           <Toolbar>
    //             <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
    //               <MenuIcon />
    //             </IconButton>
    //             <Typography variant="title" color="inherit">
    //               Devices
    //             </Typography>
    //           </Toolbar>
    //         </AppBar>
    //       </div>
    //       <div className={classes.loadingContainer}>
    //         <DeviceList devices={devices} />
    //       </div>
    //     </MuiThemeProvider>
    //   );
    // }
  }

}

export default App;