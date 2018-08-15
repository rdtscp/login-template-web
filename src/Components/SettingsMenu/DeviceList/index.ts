/* Components/SettingsMenu/DeviceList/index.ts */

/* Redux Components */
import { connect }                                    from 'react-redux';

/* Material-UI Components */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Project Components */
import DeviceList                                     from './DeviceList';

/* Project Types */
import * as Models                                    from 'src/Models';
import { deviceListClasses }                          from './Styles';

/* Project Methods */
import { setAuthStateAction }                         from '../../../State/Actions/authActions';
import { setCurrentUserAction }                       from '../../../State/Actions/userActions';

const mapStateToProps = (state: Models.StateType) => {
  return {
    authState:  state.authState,
    devices:    state.currentUser.devices,
  }
}

export default connect(mapStateToProps, { setAuthStateAction, setCurrentUserAction })(withStyles(deviceListClasses)(DeviceList));