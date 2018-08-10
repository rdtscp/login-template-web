import * as React from 'react';

import CssBaseline                                    from '@material-ui/core/CssBaseline';
import {  MuiThemeProvider }                          from '@material-ui/core/styles';

/* Components */
import LoginForm                                      from '../Components/LoginForm';

/* Types */
import { AppProps }                                   from './Types';

/* Theme/Styles */
import appTheme                                       from './Theme';

export default class App extends React.Component<AppProps> {

  public constructor(props: AppProps) {
    super(props);
    this.state = {
      loading: true
    };
  }

  public componentWillReceiveProps() {
    this.setState({
      loading: this.props.authStatus
    });
  }

  public componentWillMount() {
    // Check if this Device is already Authorised.
    const localAuthToken: any = (localStorage.getItem('authToken')) ? localStorage.getItem('authToken') : '' ;
    this.props.checkAuthTokenAction(localAuthToken);
  }

  public render() {
    if (this.props.authStatus) {
      return (
        <MuiThemeProvider theme={appTheme}>
          <CssBaseline />
            Logout
        </MuiThemeProvider>
      );
    }
    else {
      return (
        <MuiThemeProvider theme={appTheme}>
          <CssBaseline />
            <LoginForm />
        </MuiThemeProvider>
      );
    }
    
  }

}