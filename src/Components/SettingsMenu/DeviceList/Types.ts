/* Components/SettingsMenu/DeviceList/Types.ts */  //
import { Dispatch }                                   from 'redux';
import * as Models                                    from '../../../Models';
import { IAuthStateType }                              from '../../../State/Store/Types'
import { IDeviceListStyle }                           from './Styles';


interface IDeviceListProps {
  authState:            IAuthStateType;
  devices:              Models.Device[];
  setAuthStateAction:   (authToken: string) => ((dispatch: Dispatch) => void);
  setCurrentUserAction: (authToken: string) => ((dispatch: Dispatch) => void);
}

interface IDeviceListState {
  confirmationAlertOpen:    boolean;
  confirmationSnackbarOpen: boolean;
  deviceToLogoutAuthToken:  string;
  deviceToLogoutID:         string;
  deviceToLogoutString:     string;
}

type DeviceListProps = IDeviceListProps & IDeviceListStyle;
type DeviceListState = {} & IDeviceListState

export { DeviceListProps, DeviceListState };