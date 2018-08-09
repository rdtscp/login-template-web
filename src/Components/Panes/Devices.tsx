import * as React from 'react';

import { Button, Device, LoadingSpinner } from '../';
import { IBackendResponse, IDevice } from '../../Resources/Models';

import axios from 'axios';

import network from '../../Resources/networkHelper';
import utilities from '../../Resources/utilitiesHelper';

class Devices extends React.Component<any, IDevicesState>{

  constructor(props: any) {
    super(props);
    this.state = {
      devicesList: [],
      loading: true,
      username: ''
    }
  }
  
  /* On Component Mounting, Get the Devices this User is Authorised on. */
  public componentDidMount() {
    const authToken = localStorage.getItem('authToken');
    network.getCSRF((csrfToken) => {
      axios.request<IBackendResponse>({
        data: {
          _csrf: csrfToken,
          authToken
        },
        method: 'POST',
        url: 'http://localhost:1337/user/get',        
        withCredentials: true,
      })
      .then((response) => {
        // If this responded properly.
        if (response.data) {
          const serverResponse = response.data;
          // If there were no errors or warning.
          if (serverResponse.error === false && serverResponse.warning === false) {
            this.setState({
              devicesList: serverResponse.content.user.devices,
              loading: false,
              username: serverResponse.content.user.username
            });
          }
          else {
            utilities.handleNetworkResponse(serverResponse);
          }
        }
      });
    });
  }
  
  public render() {
    /* Create array of Devices to Render */
    const devices = this.state.devicesList.map((deviceData) =>
      <Device logout={this.logoutDevice} lastUsed={deviceData.lastUsed} createdAt={deviceData.createdAt} id={deviceData.id} authToken={deviceData.authToken} ip={deviceData.ip} userAgent={deviceData.userAgent} key={deviceData.id} />
    );

    if (this.state.loading) {
      return (
        <div className="devices-loading-container">
          <LoadingSpinner />
        </div>
      );
    }
    else {
      return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{width: 400, padding: 34, height: '100vh'}}>
            {devices}
            <div style={{float: 'right', padding: 15}}>
              <Button warning={true} title="Logout All" onClick={this.logoutAll} />
            </div>
          </div>
        </div>
      );
    }
  }

  private logoutDevice = (logoutDevice: IDevice) => {
    const authToken = localStorage.getItem('authToken');
    network.getCSRF((csrfToken) => {
      axios.request<IBackendResponse>({
        data: {
          _csrf: csrfToken,
          authToken,
          logoutAuthToken: logoutDevice.authToken,
          logoutId: logoutDevice.id
        },
        method: 'POST',
        url: 'http://localhost:1337/device/destroy',
        
        withCredentials: true,
      })
      .then((response) => {
        // If this responded properly.
        if (response.data) {
          const serverResponse = response.data;
          // If there were no errors or warnings.
          if (serverResponse.error === false && serverResponse.warning === false) {
            // Handle if we are logging this device out.
            if (logoutDevice.authToken === authToken) {
              alert("Logged Out of this Device");
              window.location.reload();
            }
            else {
              alert("Device Logged Out");
              const updatedDevices = this.state.devicesList.filter((device) => device.id !== logoutDevice.id );
              this.setState({
                devicesList: updatedDevices
              });
            }
          }
          else {
            utilities.handleNetworkResponse(serverResponse);
          }
        }
      });
    });
  }

  /* De-Authorises all devices under the users account. */
  private logoutAll = () => {
    if(window.confirm("Are you sure you wish to log out all devices(including this one)?")) {
      this.state.devicesList.forEach((device) => this.logoutDevice(device));
    }
  }

}

interface IDevicesState {
  devicesList:  IDevice[];
  loading:      boolean;
  username:     string;
}

export default Devices;