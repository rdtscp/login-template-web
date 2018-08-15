/* App/Types.ts */

/* Redux Types */
import { Dispatch }                                   from 'redux';

/* Project Types */
import * as Models                                    from 'src/Models';
import { IAppStyle }                                  from './Styles';

interface IAppProps {
  authState:            Models.AuthStateType;
  currentUser:          Models.User;
  setCurrentUserAction: (authToken: string) => ((dispatch: Dispatch) => void);
  setAuthStateAction:   (authToken: string) => ((dispatch: Dispatch) => void);
}

type AppProps = IAppProps & IAppStyle;

export { AppProps };