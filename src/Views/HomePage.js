import React, { Component } from 'react';

import { Button } from '../Components';

import axios from 'axios';
import network from '../Resources/networkHelper';

class Home extends Component {

  logout = () => {
    localStorage.setItem('authToken', '');
    window.location.reload();
  }

  delete = () => {
    let authToken = localStorage.getItem('authToken');
    network.getCSRF((csrfToken) => {
      axios({
        method: 'POST',
        url: 'http://localhost:1337/user/destroy',
        data: {
            _csrf: csrfToken,
            authToken: authToken
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
            localStorage.setItem('authToken', '');
            alert('Account Deleted.');
            window.location.reload();
          }
          else {
            this.handleResponse(res);
          }
        }
      });
    });
  }

  /* @TODO: Make Nicer Popup */
  handleResponse = (res) => {
    if (res.error) {
      alert('Error: ' + res.mesasge);
    }
    else {
      alert('Warning: ' + res.message);
    }
  }

  render = () => {
    return (
      <div className="landing-container">
        <div style={{width: 300}}>
          Home Page
          &nbsp;
          &nbsp;
          <Button title="Logout" onClick={this.logout} />
          &nbsp;
          &nbsp;
          <Button title="Delete Account" onClick={this.delete} />
        </div>
      </div>
    );
  }
}

export default Home;
