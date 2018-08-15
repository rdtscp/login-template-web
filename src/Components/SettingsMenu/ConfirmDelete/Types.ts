/* Components/SettingsMenu/ConfirmDelete/Types.ts */

/* Redux Types */
import { Dispatch }                                   from 'redux';

/* Project Types */
import { IAuthStateType }                              from '../../../State/Store/Types'
import { IConfirmDeleteStyle }                        from './Styles';

interface IConfirmDeleteProps {
  authState:            IAuthStateType;
  setAuthStateAction:   (authToken: string) => ((dispatch: Dispatch) => void);
}

interface IConfirmDeleteState {
  activeStep: number;
}

type ConfirmDeleteProps = IConfirmDeleteProps & IConfirmDeleteStyle;
type ConfirmDeleteState = {} & IConfirmDeleteState;
 
export { ConfirmDeleteProps, ConfirmDeleteState };