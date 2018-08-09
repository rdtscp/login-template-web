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
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: 340, paddingTop: 50, textAlign: 'center', height: '100vh'}}>
          Deleting your Account is irreversible and permanent.
          <br/>
          <div style={{marginTop: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button title="Delete Account" danger onClick={this.deleteAccount} />
          </div>
        </div>
      </div>
    );
  }

}

export default DeleteAccount;