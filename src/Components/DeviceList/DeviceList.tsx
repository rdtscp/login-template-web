import * as React                                     from 'react';
import { UAParser }                                   from 'ua-parser-js';

/* Component Imports */
import Device                                         from '../Device';

/* Type Imports */
import * as Models                                    from '../../Models';
import { DeviceListProps }                            from './Types';

/* Import Functionality */

import utilities                                      from '../../Resources/utilitiesHelper';

class DeviceList extends React.Component<DeviceListProps> {

  public render() {
    // const { devices } = this.props;
    return (
      <div>
        {this.props.devices.map((device: Models.Device, index: number) => {
          const lastUsedStr: string  = utilities.unixToDateTime(device.lastUsed);
          const thisDevice:  boolean = (device.authToken === this.props.authState.authToken) ? true : false;
          const parsedUA:    string  = this.parseUserAgent(device.userAgent);
          return(
            <Device key={index} id={device.id} authToken={device.authToken} lastUsed={lastUsedStr} logout={this.logoutDevice} thisDevice={thisDevice} userAgentStr={parsedUA} />
          )
        })}
      </div>
    );
  }

  private parseUserAgent(userAgentString: string)  {
    const parser = new UAParser();
    const userAgent = parser.setUA(userAgentString).getResult();
    
    return userAgent.browser.name + " on " + userAgent.os.name;
  }

  private logoutDevice = (deviceID: string, deviceAuthToken: string) => {
    Models.DeviceAPI.destroy(this.props.authState.authToken, deviceID, deviceAuthToken)
    .then(({ error, warning, message, content }: Models.DeviceResponseData) => {
      if (error) {
        alert('Error: ' + message);
        this.props.setAuthStateAction('');
      }
      else if (warning) {
        alert('Warning: ' + message);
      }
      else if (this.props.authState.authToken === deviceAuthToken) {
        alert('Info: ' + message + ', which is This Device.');
        this.props.setAuthStateAction('');
      }
      else {
        alert('Info: ' + message);
      }
      
      // this.props.setCurrentUserAction(this.props.authState.authToken);
    })
    .catch((err: any) => {
      alert('Unexpected Error, Please Refresh & Try Again');
      window.location.reload();
    });
  }

}

export default DeviceList;