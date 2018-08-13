/* Components/SettingsMenu/Device/Types.ts */

import { IDeviceStyle }                               from './Styles';

interface IDeviceProps {
  authToken:    string;
  id:           string;
  key:          number;
  lastUsed:     string;
  logout:       (deviceID: string, deviceAuthToken: string) => void;
  thisDevice:   boolean;
  userAgentStr: string;
}

type DeviceProps = IDeviceProps & IDeviceStyle;

export { DeviceProps };