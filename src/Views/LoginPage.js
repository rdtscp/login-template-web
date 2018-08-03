import React, { Component } from 'react';
import { Button, InputField } from '../Components';

import axios from 'axios';
import network from '../Resources/networkHelper';
import utilities from '../Resources/utilitiesHelper';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
  }

  usernameChange = (newUsername) => {
    this.setState({username: newUsername.target.value});
  }

  passwordChange = (newPassword) => {
    this.setState({password: newPassword.target.value});
  }

  login = () => {
    network.getCSRF((csrfToken) => {
      axios({
        method: 'POST',
        url: 'http://localhost:1337/device/create',
        data: {
            _csrf: csrfToken,
            username: this.state.username,
            password: this.state.password,
        },
        withCredentials: true,
        contentType: 'json',
      })
      .then((response) => {
        // If this responded properly.
        if (response.data) {
          let res = response.data;
          // If there were no errors or warning.
          if (res.error === false && res.warning === false) {
            let newAuthToken = response.data.content.authToken;
            localStorage.setItem('authToken', newAuthToken);
            window.location.reload();
          }
          else {
            utilities.handleNetworkResponse(res);
          }
        }
      });
    });
  }

  register = () => {
    network.getCSRF((csrfToken) => {
      axios({
        method: 'POST',
        url: 'http://localhost:1337/user/create',
        data: {
            _csrf: csrfToken,
            username: this.state.username,
            password: this.state.password,
        },
        withCredentials: true,
        contentType: 'json',
      })
      .then((response) => {
        // If this responded properly.
        if (response.data) {
          let res = response.data;
          if (res.error === false && res.warning === false) {
            alert("Account Created");
          }
          else {
            utilities.handleNetworkResponse(res);
          }
        }
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
            <br />
            <div className="login-register-container">
              <Button title="Login" onClick={this.login} />
              <Button title="Register" onClick={this.register} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;