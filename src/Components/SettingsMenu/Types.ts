/* Componets/SettingsMenu/Types.ts */

import * as Models                                    from '../../Models';
import { AuthStateType }                              from '../../State/Store/Types'
import { ISettingsMenuStyle }                         from './Styles';

interface ISettingsMenuProps {
  authState:        AuthStateType;
  closeSettings:    () => void;
  currentUser:      Models.User;
}

type SettingsMenuProps = ISettingsMenuProps & ISettingsMenuStyle;

export { SettingsMenuProps };