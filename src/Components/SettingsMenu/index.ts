/* Components/SettingsMenu/index.ts */

/* Redux Components */
import { connect }                                    from 'react-redux';
import * as Models                                    from 'src/Models';
import { setAuthStateAction }                         from 'src/State/Actions/authActions';
import { setCurrentUserAction }                       from 'src/State/Actions/userActions';

/* Material-UI Styling */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Project Component */
import SettingsMenu                                   from './SettingsMenu';
import { settingsMenuClasses }                        from './Styles';

const mapStateToProps = (state: Models.StateType) => {
  return {
    authState:  state.authState,
    devices:    state.currentUser.devices,
  }
}

export default connect(mapStateToProps, { setAuthStateAction, setCurrentUserAction })(withStyles(settingsMenuClasses)(SettingsMenu));
