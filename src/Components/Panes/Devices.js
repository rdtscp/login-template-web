import React, { Component } from 'react';

import { Button, Device, LoadingSpinner } from '../';

import axios from 'axios';

import network from '../../Resources/networkHelper';

class Devices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      devicesList: [],
      username: null
    }
  }

  /* De-Authorises all devices under the users account. */
  logoutAll = () => {
    if(window.confirm("Are you sure you wish to log out all devices(including this one)?")) {
      this.state.devicesList.forEach((device) => this.logoutDevice(device));
    }
  }

  /* Takes a Device to logout:
   * {
   *   createdAt:  this.props.createdAt,
   *   id:         this.props.id,
   *   authToken:  this.props.authToken,
   *   ip:         this.props.ip,
   *   userAgent:  this.props.userAgent,
   * }
   * 
   * And De-Authorises the device from the users account.
   */ 
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
          let serverResponse = response.data;
          // If there were no errors or warnings.
          if (serverResponse.error === false && serverResponse.warning === false) {
            // Handle if we are logging this device out.
            if (logoutDevice.authToken === authToken) {
              alert("Logged Out of this Device");
              window.location.reload();
            }
            else {
              alert("Device Logged Out");
              let updatedDevices = this.state.devicesList.filter((device) => device.id !== logoutDevice.id );
              this.setState({
                devicesList: updatedDevices
              });
            }
          }
          else {
            this.handleResponse(serverResponse);
          }
        }
      });
    });
  }
 
  /* On Component Mounting, Get the Devices this User is Authorised on. */
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
          let serverResponse = response.data;
          // If there were no errors or warning.
          if (serverResponse.error === false && serverResponse.warning === false) {
            this.setState({
              loading: false,
              devicesList: serverResponse.content.user.devices,
              username: serverResponse.content.user.username
            });
          }
          else {
            this.handleResponse(serverResponse);
          }
        }
      });
    });
  }
  
  render = () => {
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
        <div style={{margin: 200, padding: 10}}>
          <div style={{float: 'left', fontSize: 25, paddingLeft: 10}}>
            {this.state.username}
          </div>
          <div style={{float: 'right'}}>
            <Button warning title="Logout All" onClick={this.logoutAll} />
          </div>
          <div style={{ marginTop: 50}}>
          {devices}
          </div>
        </div>
      );
    }
  }

}

export default Devices;