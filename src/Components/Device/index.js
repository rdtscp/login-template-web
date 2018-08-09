import React, { Component } from 'react';

import { Button } from '../';

import UAParser from   'ua-parser-js';

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
  
  render = () => {
    let localAuthToken = localStorage.getItem('authToken');

    let lastUsed = utilities.unixToDateTime(this.state.lastUsed);

    if (localAuthToken === this.state.authToken) {
      lastUsed = <b> This Device </b>;
    }
    return (
      <div className="shadowed" style={{display: 'flex', width: 332, height: 73, padding: 15, backgroundColor: 'white'}}>
        <div style={{flexGrow: 1, fontSize: 14}}>
          {this.parseUserAgent(this.state.userAgent)} <br/>
          {lastUsed}
        </div>
        <div style={{}}>
          <Button title="Logout" onClick={this.logoutDevice} />
        </div>
      </div>
    );
  }

}

export default Device;