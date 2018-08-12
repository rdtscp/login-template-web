/* AppNavigator/index.ts */

/* Redux */
import { connect }                                    from 'react-redux';
import { IStateType }                                 from '../../State';

/* Material-UI Styling */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Component View */
import AppNavigator                                   from './AppNavigator';
import { appNavigatorClasses }                                 from './Styles';

const mapStateToProps = (state: IStateType) => {
  return {
    devices:    state.currentUser.devices
  }
}

export default connect(mapStateToProps, {})(withStyles(appNavigatorClasses, {withTheme: true})(AppNavigator));