/* Componets/SettingsMenu/Types.ts */

import { Dispatch }                                   from 'redux';
import * as Models                                    from '../../Models';
import { AuthStateType }                              from '../../State/Store/Types'
import { ISettingsMenuStyle }                         from './Styles';

interface ISettingsMenuProps {
  closeSettings:        () => void;
  authState:            AuthStateType;
  devices:              Models.Device[];
  setAuthStateAction:   (authToken: string) => ((dispatch: Dispatch) => void);
  setCurrentUserAction: (authToken: string) => ((dispatch: Dispatch) => void);
}

type SettingsMenuProps = ISettingsMenuProps & ISettingsMenuStyle;

export { SettingsMenuProps };