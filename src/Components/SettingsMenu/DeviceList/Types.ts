/* Components/SettingsMenu/DeviceList/Types.ts */  //
import { Dispatch }                                   from 'redux';
import * as Models                                    from '../../../Models';
import { AuthStateType }                              from '../../../State/Store/Types'
import { IDeviceListStyle }                           from './Styles';


interface IDeviceListProps {
  authState:            AuthStateType;
  devices:              Models.Device[];
  setAuthStateAction:   (authToken: string) => ((dispatch: Dispatch) => void);
  setCurrentUserAction: (authToken: string) => ((dispatch: Dispatch) => void);
}

type DeviceListProps = IDeviceListProps & IDeviceListStyle;

export { DeviceListProps };