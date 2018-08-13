/* Components/SettingsMenu/ConfirmDelete/Types.ts */

import { IConfirmDeleteStyle }                        from './Styles';

interface IConfirmDeleteState {
  activeStep: number;
}

type ConfirmDeleteProps = {} & IConfirmDeleteStyle;
type ConfirmDeleteState = {} & IConfirmDeleteState;
 
export { ConfirmDeleteProps, ConfirmDeleteState };