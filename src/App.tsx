import * as React from 'react';

import CssBaseline                                    from '@material-ui/core/CssBaseline';
import {  MuiThemeProvider }                          from '@material-ui/core/styles';

/* Redux */
import { connect }                                    from 'react-redux';

import { checkAuthTokenAction}                from './Actions/authActions';

/* Components */
import LoginForm                                      from './Components/LoginForm';

/* Theme/Styles */
import appTheme                                       from './theme';

  
class App extends React.Component<{ authStatus: boolean, checkAuthTokenAction: (authToken: string) => ((dispatch: any) => void) }> {

  public constructor(props: any) {
    super(props);
    this.componentWillMount.bind(this);
    this.render.bind(this);
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
            <a onClick={this.crudeLogout}> Logout </a>
            {this.props.authStatus}
        </MuiThemeProvider>
      );
    }
    else {
      return (
        <MuiThemeProvider theme={appTheme}>
          <CssBaseline />
            {this.props.authStatus};
            <LoginForm />
        </MuiThemeProvider>
      );
    }
    
  }

  private crudeLogout = () => {
    localStorage.removeItem('authToken');
    window.location.reload();
  }

}

const mapStateToProps = (state: any) => {
  return {
    authStatus: state.authState.authStatus,
  }
}


export default connect(mapStateToProps, { checkAuthTokenAction })(App);
