import * as React from 'react';

/* Component Imports */
import Device                                         from '../Device';

/* Type Imports */
import IDeviceType                                    from '../Device/types';
import IDeviceListType                                from './types';

/* Style Imports */
import { IDeviceListStyles }                          from './styles';


export default class DeviceList extends React.Component<IDeviceListType & IDeviceListStyles> {

  constructor(props: IDeviceListType & IDeviceListStyles) {
    super(props);
    this.render.bind(this);
  }

  public render() {
    return (
      <div>
        {this.props.devices.map((device: IDeviceType, index: number) => (
          <Device key={index} lastUsed={device.lastUsed} logout={this.logoutDevice} thisDevice={device.thisDevice} userAgentStr={device.userAgentStr} />
        ))}
      </div>
    );
  }

  private logoutDevice(deviceIndex: number) {
    this.props.onDeviceClick(123);
  }

}
