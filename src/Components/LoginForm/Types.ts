/* Components/LoginForm/Types.ts */

import { Dispatch }                                   from 'redux';
import { ILoginFormStyle }                            from './Styles';

import { IAuthStateType }                              from '../../State/Store/Types'

interface ILoginFormProps {
  authState:                    IAuthStateType;
  setAuthStateAction:           (authToken: string) => ((dispatch: Dispatch) => void);
  setCurrentUserAction:         (authToken: string) => ((dispatch: Dispatch) => void);
}

interface ILoginFormState {
  password:                 string;
  showPassword:             boolean;
  snackbarMessage:          string;
  snackbarOpen:             boolean;
  username:                 string;
}

type LoginFormProps = ILoginFormProps & ILoginFormStyle;
type LoginFormState = ILoginFormState;

export { LoginFormProps, LoginFormState }