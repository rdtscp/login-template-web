/* Components/AppNavigator/Types.ts */

import { Dispatch }                                   from 'redux';

/* Project Types */
import * as Models                                    from '../../Models';
import { AuthStateType }                              from '../../State/Store/Types';
import { IAppNavigatorStyle }                         from './Styles';

interface IAppNavigatorProps {
  authState:            AuthStateType;
  currentUser:          Models.User;
  setCurrentUserAction: (authToken: string) => ((dispatch: Dispatch) => void);
}

interface IAppNavigatorState {
  activePane:     string;
  mobileOpen:     boolean;
  mobileWasOpen:  boolean;
  settingsOpen:   boolean;
}

type AppNavigatorProps = IAppNavigatorProps & IAppNavigatorStyle;
type AppNavigatorState = IAppNavigatorState;

export { AppNavigatorProps, AppNavigatorState };