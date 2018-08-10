import { IAppStyle }                        from './Styles';

interface IAppProps {
  authStatus:             boolean;                                            // Indicates if this app is Authorised to an account.
  checkAuthTokenAction:   (authToken: string)=> ((dispatch: any) => void);    // Foo
}

interface IAppState {
  loading: boolean;
}

type AppProps = IAppProps & IAppStyle;
type AppState = IAppState;

export { AppProps, AppState };
