import * as React from 'react';

import { Button, InputField } from '../Components';
import { IBackendResponse } from '../Resources/Models';

import axios from 'axios';
import network from '../Resources/networkHelper';
import utilities from '../Resources/utilitiesHelper';

class Login extends React.Component<any, ILoginState> {

  constructor(props: void) {
    super(props);
    this.state = {
      password: '',
      username: ''
    };
    this.render.bind(this);
  }

  public render() {
    return (
      <div className="login-page">
        <div className="login-container">
          <form>
            <InputField title="Username" onEnter={this.login} onChange={this.usernameChange} />                 <br/>
            <InputField title="Password" onEnter={this.login} onChange={this.passwordChange} type="password" /> <br/>
            <div className="login-register-container">
              <Button title="Login" onClick={this.login} />
              <Button title="Register" onClick={this.register} />
            </div>
          </form>
        </div>
      </div>
    );
  }

  private usernameChange = (newUsername: string) => {
    this.setState({username: newUsername});
  }

  private passwordChange = (newPassword: string) => {
    this.setState({password: newPassword});
  }

  private login = () => {
    network.getCSRF((csrfToken) => {
      axios.request<IBackendResponse>({
        data: {
          _csrf: csrfToken,
          password: this.state.password,
          username: this.state.username,
        },
        method: 'POST',
        url: 'http://localhost:1337/device/create',
        withCredentials: true,
      })
      .then((response) => {
        // If this responded properly.
        if (response.data) {
          const res = response.data;
          // If there were no errors or warning.
          if (res.error === false && res.warning === false) {
            const newAuthToken = response.data.content.authToken;
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

  private register = () => {
    network.getCSRF((csrfToken) => {
      axios.request<IBackendResponse>({
        data: {
          _csrf: csrfToken,
          password: this.state.password,
          username: this.state.username,
        },
        method: 'POST',
        url: 'http://localhost:1337/user/create',
        withCredentials: true,
      })
      .then((response) => {
        // If this responded properly.
        if (response.data) {
          const res = response.data;
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

}

interface ILoginState {
  username: string;
  password: string;
}

export default Login;
