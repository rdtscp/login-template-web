import React, { Component } from 'react';

import { Button, Device } from '../';

import axios from 'axios';

import network from '../../Resources/networkHelper';

class Devices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      devicesList: [
      ]
    }
  }

  logoutAll = () => {
    if(window.confirm("Are you sure you wish to log out all devices(including this one)?")) {
      this.state.devicesList.forEach((device) => {
        console.log("Logging Out Device: " + device.id);
        this.logoutDevice(device);
      });
    }
  }

  logoutDevice = (logoutDevice) => {
    let authToken = localStorage.getItem('authToken');
    network.getCSRF((csrfToken) => {
      axios({
        method: 'POST',
        url: 'http://localhost:1337/device/destroy',
        data: {
            _csrf: csrfToken,
            authToken: authToken,
            logoutAuthToken: logoutDevice.authToken,
            logoutId: logoutDevice.id
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
            // Handle if we are logging this device out.
            if (logoutDevice.authToken === authToken) {
              alert("Logged Out of this Device");
              window.location.reload();
            }
            else {
              alert("Device Logged Out");
              let updatedDevices = this.state.devicesList.filter((device) => {
                return device.id !== logoutDevice.id;
              });
              this.setState({
                devicesList: updatedDevices
              });
            }
          }
          else {
            this.handleResponse(res);
          }
        }
      });
    });
  }
 
  componentDidMount = () => {
    let authToken = localStorage.getItem('authToken');
    network.getCSRF((csrfToken) => {
      axios({
        method: 'POST',
        url: 'http://localhost:1337/user/get',
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
            this.setState({
              devicesList: response.data.content.user.devices
            });
          }
          else {
            this.handleResponse(res);
          }
        }
      });
    });
  }
  
  render = () => {
    const devices = this.state.devicesList.map((deviceData) =>
      <Device logout={this.logoutDevice} createdAt={deviceData.createdAt} id={deviceData.id} authToken={deviceData.authToken} ip={deviceData.ip} userAgent={deviceData.userAgent} key={deviceData.id} />
    );
    return (
      <div>
        <Button title="Logout All" onClick={this.logoutAll} />
        <div className="device-list-container">
         {devices}
        </div>
      </div>
    );
  }

}

export default Devices;