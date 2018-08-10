import { IAppStyle }                        from './Styles';

interface IAppProps {
  authStatus:             boolean;                                            // Indicates if this app is Authorised to an account.
  checkAuthTokenAction:   (authToken: string)=> ((dispatch: any) => void);    // Foo
}

export type AppProps = IAppProps & IAppStyle;
