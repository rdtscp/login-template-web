import * as React from 'react';

import axios from 'axios';
import { Button } from '../';
import { IBackendResponse } from '../../Resources/Models';
import network from '../../Resources/networkHelper';
import utilities from '../../Resources/utilitiesHelper';

class DeleteAccount extends React.Component<any, any> {

  public render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: 340, paddingTop: 50, textAlign: 'center', height: '100vh'}}>
          Deleting your Account is irreversible and permanent.
          <br/>
          <div style={{marginTop: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button title="Delete Account" danger={true} onClick={this.deleteAccount} />
          </div>
        </div>
      </div>
    );
  }

  private deleteAccount = () => {
    const authToken: any = localStorage.getItem('authToken');
    network.getCSRF((csrfToken: string) => {
      axios.request<IBackendResponse>({
        data: {
          _csrf: csrfToken,
          authToken
        },
        method: 'POST',
        url: 'http://localhost:1337/user/destroy',
        
        withCredentials: true,
      })
      .then((response) => {
        // If this responded properly.
        if (response.data) {
          const res = response.data;
          // If there were no errors or warning.
          if (res.error === false && res.warning === false) {
            localStorage.setItem('authToken', '');
            alert('Account Deleted.');
            window.location.reload();
          }
          else {
            utilities.handleNetworkResponse(res);
          }
        }
      });
    });
  }

}

export default DeleteAccount;