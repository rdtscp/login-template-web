/* Components/AppNavigator/Types.ts */

import { Dispatch }                                   from 'redux';

/* Project Types */
import * as Models                                    from '../../Models';
import { IAuthStateType }                              from '../../State/Store/Types';
import NavigatorPane                                  from "../NavigatorPanes/NavigatorPane";
import { IAppNavigatorStyle }                         from './Styles';


interface IAppNavigatorProps {
  authState:            IAuthStateType;
  currentUser:          Models.User;
  setCurrentUserAction: (authToken: string) => ((dispatch: Dispatch) => void);
}

interface IAppNavigatorState {
  activePane:       NavigatorPane;
  mobileOpen:       boolean;
  mobileWasOpen:    boolean;
  navigatorPanes:   NavigatorPane[];
  settingsOpen:     boolean;
}

type AppNavigatorProps = IAppNavigatorProps & IAppNavigatorStyle;
type AppNavigatorState = IAppNavigatorState;

export { AppNavigatorProps, AppNavigatorState };