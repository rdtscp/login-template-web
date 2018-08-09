import * as React from 'react';

import * as Views from './Views';

import network from './Resources/networkHelper';

interface IAppState {
  authenticated:    boolean
  loading:          boolean
  loadingMessage:   string
  token?:           string
}

class App extends React.Component<any, IAppState> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      authenticated:  false,
      loading:        true,
      loadingMessage: '',
      token:          undefined
    };
  }

  public componentDidMount = () => {
    const localAuthToken = localStorage.getItem('authToken');

    /* Inform User of Possible Connection Issues */
    setTimeout(() => {
      this.setState({
        loadingMessage: "Its taking a long time to connect to server, please refresh and check your internet connection.",
      });
    }, 5000);

    /* Check if we are still Authenticated with the Server */
    if (localAuthToken !== null) {
      network.isAuthorised(localAuthToken, (authStatus) => {
        this.setState({
          authenticated: authStatus,
          loading: false,
          token: localAuthToken
        });
      });
    }
    else {
      this.setState({
        authenticated: false,
        loading: false,
      });
    }
  }

  public render = () => {
    if (this.state.loading) {
      return(<Views.Landing message={this.state.loadingMessage}/>);
    }
    else if (this.state.authenticated) {
      return (<Views.Account/>);
    }
    else {
      return (<Views.Login />);
    }
  }

}

export default App;
