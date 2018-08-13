/* Components/AppNavigator/Types.ts */

/* Project Types */
import { IAppNavigatorStyle }                         from './Styles';

interface IAppNavigatorState {
  activePane:     string;
  mobileOpen:     boolean;
  mobileWasOpen:  boolean;
  settingsOpen:   boolean;
}

type AppNavigatorProps = {} & IAppNavigatorStyle;
type AppNavigatorState = IAppNavigatorState;

export { AppNavigatorProps, AppNavigatorState };