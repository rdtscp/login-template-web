import React, { Component } from 'react';

import * as Views from './Views';

import network from './Resources/networkHelper';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      authenticated: false,
      token: null
    };
  }

  /* Checks if this device is authenticated for any particular user. */
  componentDidMount = () => {
    let localAuthToken = localStorage.getItem('authToken');

    /* Check with backend if the token provides authentication. */
    network.isAuthorised(localAuthToken, (authStatus) => {
      this.setState({
        loading: false,
        authenticated: authStatus,
        token: localAuthToken
      });
    });
  }

  render = () => {
    if (this.state.loading) {
      return(<Views.Landing/>);
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