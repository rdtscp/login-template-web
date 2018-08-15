/* Componets/SettingsMenu/Types.ts */

import { Dispatch }                                   from 'redux';
import * as Models                                    from 'src/Models';
import { ISettingsMenuStyle }                         from './Styles';

interface ISettingsMenuProps {
  closeSettings:        () => void;
  authState:            Models.AuthStateType;
  devices:              Models.Device[];
  setAuthStateAction:   (authToken: string) => ((dispatch: Dispatch) => void);
  setCurrentUserAction: (authToken: string) => ((dispatch: Dispatch) => void);
}

interface ISettingsMenuState {
  confirmationLogoutAlertOpen: boolean;
}

type SettingsMenuProps = ISettingsMenuProps & ISettingsMenuStyle;
type SettingsMenuState = ISettingsMenuState;

export { SettingsMenuProps, SettingsMenuState };