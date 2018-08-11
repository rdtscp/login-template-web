import { Dispatch }                         from 'redux';
import * as Models                          from '../../Models';
import { IDeviceListStyle }                 from './Styles';

import { AuthStateType }                    from '../../State/Store/Types'


interface IDeviceListProps {
  authState:            AuthStateType;
  devices:              Models.Device[];
  setAuthStateAction:   (authToken: string) => ((dispatch: Dispatch) => void);
  setCurrentUserAction: (authToken: string) => ((dispatch: Dispatch) => void);
}

type DeviceListProps = IDeviceListProps & IDeviceListStyle;

export { DeviceListProps };