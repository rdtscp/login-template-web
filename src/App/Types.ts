import { Dispatch }                         from 'redux';
import * as Models                          from '../Models';
import { IAppStyle }                        from './Styles';

import { AuthStateType }                    from '../State/Store/Types'

interface IAppProps {
  authState:            AuthStateType;
  currentUser:          Models.User;
  setCurrentUserAction: (authToken: string) => ((dispatch: Dispatch) => void);
  setAuthStateAction:   (authToken: string) => ((dispatch: Dispatch) => void);
}

type AppProps = IAppProps & IAppStyle;


export { AppProps };
