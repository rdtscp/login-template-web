/* Componets/SettingsMenu/Types.ts */

import { ISettingsMenuStyle }                         from './Styles';

interface ISettingsMenuProps {
  closeSettings:    () => void;
}

type SettingsMenuProps = ISettingsMenuProps & ISettingsMenuStyle;

export { SettingsMenuProps };