import * as React from 'react';

import * as UAParser from 'ua-parser-js';

import { Button } from '../';
import { IDevice } from '../../Resources/Models';

import utilities from '../../Resources/utilitiesHelper';

class Device extends React.Component<IDeviceProps, IDevice>{

  constructor(props: IDeviceProps) {
    super(props);
    this.state = {
      authToken:  this.props.authToken,
      createdAt:  this.props.createdAt,
      id:         this.props.id,
      ip:         this.props.ip,
      lastUsed:   this.props.lastUsed,
      userAgent:  this.props.userAgent
    };
  }

  public render = () => {
    const localAuthToken = localStorage.getItem('authToken');

    let lastUsed: any = utilities.unixToDateTime(this.state.lastUsed);

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

  private logoutDevice = () => {
    this.props.logout(this.state);
  }

  private parseUserAgent= (userAgentString: string): string => {
    const parser = new UAParser.UAParser();
    const userAgent = parser.setUA(userAgentString).getResult();
    
    return userAgent.browser.name + " on " + userAgent.os.name;
  }

}

interface IDeviceProps {
  authToken:  string;
  createdAt:  number;
  id:         number;
  ip:         string;
  lastUsed:   number;
  userAgent:  string;
  logout:     (state: any) => void;
}

export default Device;