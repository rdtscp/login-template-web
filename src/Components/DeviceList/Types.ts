import IDeviceType from '../Device/types';

interface IDeviceListType {
  devices:        IDeviceType[];
  onDeviceClick:  (deviceIndex: number) => void;
}

export default IDeviceListType