/* DeviceList/index.ts */

/* Redux */
import { connect }                                    from 'react-redux';
import { IStateType }                                 from '../../State';
import { setAuthStateAction }                         from '../../State/Actions/authActions';
import { setCurrentUserAction }                       from '../../State/Actions/userActions';

/* Material-UI Styling */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Component View */
import DeviceList                                     from './DeviceList';
import { deviceListClasses }                          from './Styles';

const mapStateToProps = (state: IStateType) => {
  return {
    authState:  state.authState,
  }
}

export default connect(mapStateToProps, { setAuthStateAction, setCurrentUserAction })(withStyles(deviceListClasses)(DeviceList));