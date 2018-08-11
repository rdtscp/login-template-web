import { IDeviceStyle }       from './Styles';

interface IDeviceProps {
  key:          number;                                           // Index number of the rendered Device.
  lastUsed:     string;                                           // Pre-Formatted Last Used String.
  logout:       (deviceIndex: number) => void;                    // Function to Call to Logout the Device.
  thisDevice:   boolean;                                          // Indicates if this is the Device currently being used.
  userAgentStr: string;                                           // Pre-Formatted User-Agent String.
}

type DeviceProps = IDeviceProps & IDeviceStyle;

export { DeviceProps };