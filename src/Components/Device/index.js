import React, { Component } from 'react';

import { Button } from '../';

import UAParser from 'ua-parser-js';
import ipLocation from 'ip-location';

import utilities from '../../Resources/utilitiesHelper';

class Device extends Component {

  constructor(props) {
    super(props);
    this.state = {
      createdAt:  this.props.createdAt,
      lastUsed:   this.props.lastUsed,
      id:         this.props.id,
      authToken:  this.props.authToken,
      ip:         this.props.ip,
      userAgent:  this.props.userAgent,
      location: "Checking..."
    };
  }

  logoutDevice = () => {
    this.props.logout(this.state);
  }

  parseUserAgent = (userAgentString) => {
    let parser = new UAParser();
    let userAgent = parser.setUA(userAgentString).getResult();
    
    let output = userAgent.browser.name + " on " + userAgent.os.name;
    return output;
  }

  componentDidMount = () => {
    ipLocation(this.state.ip)
    .then((data) => {
      this.setState({
        location: data.region_name + " in " + data.country_code
      });
    })
    .catch((err) => {
      this.setState({
        location: "Unknown Location. IP: " + this.state.ip
      });
    })
  }
  
  render = () => {
    let localAuthToken = localStorage.getItem('authToken');

    let lastUsed = utilities.unixToDateTime(this.state.lastUsed);

    if (localAuthToken === this.state.authToken) {
      lastUsed = <b> This Device </b>;
    }
    return (
      <div className="device-entry">
        <div style={{paddingRight: 50}}>
          {this.parseUserAgent(this.state.userAgent)} <br/>
          {lastUsed}
        </div>
        <Button title="Logout" onClick={this.logoutDevice} />
     </div>
    );
  }

}

export default Device;