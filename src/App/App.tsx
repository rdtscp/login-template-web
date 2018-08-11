import * as React from 'react';

/* Theme */
import CircularProgress                               from '@material-ui/core/CircularProgress';
import CssBaseline                                    from '@material-ui/core/CssBaseline';
import LinearProgress                                 from '@material-ui/core/LinearProgress';
import { MuiThemeProvider }                           from '@material-ui/core/styles';
import { appTheme }                                   from './Theme';

/* Components */
import DeviceList                                     from '../Components/DeviceList';
import LoginForm                                      from '../Components/LoginForm';

/* Types */
import { AppProps }                                   from './Types';

/* Logic */

class App extends React.Component<AppProps> {

  public render() {
    const { authState, classes, currentUser }   = this.props;

    if (authState.authStatus === true) {
      // this.props.setCurrentUserAction(authState.authToken);
    }

    const localAuthToken: string | null         = localStorage.getItem('authToken');

    if (localAuthToken !== null && authState.authToken === '') {
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
    else if (localAuthToken === null) {
      return (
        <MuiThemeProvider theme={appTheme}>
          <CssBaseline />
            <LoginForm />
        </MuiThemeProvider>
      );
    }
    else if (authState.authToken !== '' && authState.authToken != null && currentUser.id !== '') {
      const { devices } = currentUser;
      return (
        <MuiThemeProvider theme={appTheme}>
          <CssBaseline />
          <div className={classes.loadingContainer}>
            <DeviceList devices={devices} />
          </div>
        </MuiThemeProvider>
      );
    }
    else if (authState.authToken !== null && authState.authToken !== '') {
      this.props.setCurrentUserAction(authState.authToken);
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
    else {
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
  }

}

export default App;