/* Components/SettingsMenu/ConfirmDelete/Types.ts */

/* Redux Types */
import { Dispatch }                                   from 'redux';

/* Project Types */
import * as Models                                    from 'src/Models'
import { IConfirmDeleteStyle }                        from './Styles';

interface IConfirmDeleteProps {
  authState:            Models.AuthStateType;
  setAuthStateAction:   (authToken: string) => ((dispatch: Dispatch) => void);
}

interface IConfirmDeleteState {
  activeStep: number;
}

type ConfirmDeleteProps = IConfirmDeleteProps & IConfirmDeleteStyle;
type ConfirmDeleteState = {} & IConfirmDeleteState;
 
export { ConfirmDeleteProps, ConfirmDeleteState };