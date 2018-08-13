/* Components/AppNavigator/Types.ts */

/* Project Types */
import * as Models                                    from '../../Models';
import { IAppNavigatorStyle }                         from './Styles';

interface IAppNavigatorProps {
  currentUser:    Models.User;
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