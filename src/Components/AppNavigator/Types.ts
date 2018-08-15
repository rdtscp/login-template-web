/* Components/AppNavigator/Types.ts */

import { Dispatch }                                   from 'redux';

/* Project Types */
import NavigatorPane                                  from "src/Components/NavigatorPanes/NavigatorPane";
import * as Models                                    from 'src/Models';
import { IAppNavigatorStyle }                         from './Styles';


interface IAppNavigatorProps {
  authState:            Models.AuthStateType;
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