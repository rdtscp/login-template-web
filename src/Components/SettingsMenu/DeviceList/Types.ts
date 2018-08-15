/* Components/SettingsMenu/DeviceList/Types.ts */  //
import { Dispatch }                                   from 'redux';
import * as Models                                    from 'src/Models';
import { IDeviceListStyle }                           from './Styles';


interface IDeviceListProps {
  authState:            Models.AuthStateType;
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