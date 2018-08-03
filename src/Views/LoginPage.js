import React, { Component } from 'react';
import { Button, InputField } from '../Components';

import axios from 'axios';
import network from '../Resources/networkHelper';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      csrfToken: null
    };
  }


  usernameChange = (newUsername) => {
    this.setState({username: newUsername.target.value});
  }

  passwordChange = (newPassword) => {
    this.setState({password: newPassword.target.value});
  }

  /* @TODO
   *  Submit POST Request to backend to verify credentials.
   *  Backend returns authToken if credentials match, otherwise returns error.
   */
  login = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:1337/device/create',
      data: {
          _csrf: this.state.csrfToken,
          username: this.state.username,
          password: this.state.password,
      },
      withCredentials: true,
      contentType: 'json',
    })
    .then((response) => {
      if (response.data.content && response.data.content.authToken) {
        let newAuthToken = response.data.content.authToken;
        localStorage.setItem('authToken', newAuthToken);
      }
    });
  }

  componentDidMount = () => {
    network.getCSRF((csrfToken) => {
      this.setState({
        csrfToken: csrfToken
      });
    });
  }

  render = () => {
    return (
      <div className="login-page">
        <div className="login-container">
          <form>
            <InputField title="Username" onEnter={this.login} onChange={this.usernameChange} />
            <br />
            <InputField title="Password" onEnter={this.login} onChange={this.passwordChange} type="password" />
            <br />
            <Button title="Login" onClick={this.login} />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
