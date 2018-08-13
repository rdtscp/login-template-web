/* Components/SettingsMenu/index.ts */

/* Redux Components */
import { connect }                                    from 'react-redux';
import { IStateType }                                 from '../../State';
import { setAuthStateAction }                         from '../../State/Actions/authActions';
import { setCurrentUserAction }                       from '../../State/Actions/userActions';

/* Material-UI Styling */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Project Component */
import SettingsMenu                                   from './SettingsMenu';
import { settingsMenuClasses }                        from './Styles';

const mapStateToProps = (state: IStateType) => {
  return {
    authState:    state.authState,
    currentUser:  state.currentUser,
  }
}

export default connect(mapStateToProps, { setAuthStateAction, setCurrentUserAction })(withStyles(settingsMenuClasses)(SettingsMenu));
