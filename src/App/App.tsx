import * as React from 'react';

/* Theme */
import CssBaseline                                    from '@material-ui/core/CssBaseline';
import { MuiThemeProvider }                           from '@material-ui/core/styles';
import { appTheme }                                   from './Theme';

/* Components */
import LoginForm                                      from '../Components/LoginForm';

/* Types */
import { AppProps, AppState }                         from './Types';

/* Logic */
import { checkAuthToken }                             from './Container';

class App extends React.Component<AppProps, AppState> {

  public constructor(props: AppProps) {
    super(props);
    this.state = {
      loading: true
    };
  }

  public componentWillMount() {
    // Check if this Device is already Authorised.
    checkAuthToken((authStatus, authToken) => {
      this.props.setAuthState(authStatus, authToken);
      this.setState({
        loading: false
      });
    });
  }

  public render() {
    if (this.state.loading === true) {
      return (
        <p> Loading... </p>
      );
    }
    if (this.props.authStatus) {
      return (
        <MuiThemeProvider theme={appTheme}>
          <CssBaseline />
            <a onClick={this.crudeLogout}>Logout</a>
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

  private crudeLogout = () => {
    localStorage.removeItem('authToken');
    this.props.setAuthState(false, '');
  }

}

export default App;