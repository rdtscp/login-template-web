import { Dispatch }             from 'redux';
import { ILoginFormStyle }      from './Styles';

import { AuthStateType }                    from '../../State/Store/Types'

interface ILoginFormProps {
  authState:                    AuthStateType;
  setAuthStateAction:           (authToken: string) => ((dispatch: Dispatch) => void);
  setCurrentUserAction:         (authToken: string) => ((dispatch: Dispatch) => void);
}

interface ILoginFormState {
  password:                 string;
  showPassword:             boolean;
  username:                 string;
}

type LoginFormProps = ILoginFormProps & ILoginFormStyle;
type LoginFormState = ILoginFormState;

export { LoginFormProps, LoginFormState }