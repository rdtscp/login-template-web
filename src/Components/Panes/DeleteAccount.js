import React, { Component } from 'react';

import { Button } from '../';
import axios from 'axios';
import network from '../../Resources/networkHelper';


class DeleteAccount extends Component {

  deleteAccount = () => {
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

  render = () => {
    return (
      <div>
        Delete Account Pane
        <br />
        <Button title="Delete Account" onClick={this.deleteAccount} />
      </div>
    );
  }

}

export default DeleteAccount;