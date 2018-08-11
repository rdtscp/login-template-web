import { ILoginFormStyle }      from './Styles';

interface ILoginFormProps {
  setAuthState:           (authStatus: boolean, authToken: string)=> ((dispatch: any) => void);
}

interface ILoginFormState {
  password:                 string;
  showPassword:             boolean;
  username:                 string;
}

type LoginFormProps = ILoginFormProps & ILoginFormStyle;
type LoginFormState = ILoginFormState;

export { LoginFormProps, LoginFormState }