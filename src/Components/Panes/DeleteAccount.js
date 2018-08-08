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
      <div style={{margin: 200, padding: 10, fontSize: 18}}>
        <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
          Deleting your Account is irreversible and permanent.
        </div>
        <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
          <Button title="Delete Account" danger onClick={this.deleteAccount} />
        </div>
      </div>
    );
  }

}

export default DeleteAccount;