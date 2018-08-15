/* Components/AppNavigator/index.ts */

/* Redux Components */
import { connect }                                    from 'react-redux';

/* Material-UI Components */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Project Components */
import AppNavigator                                   from './AppNavigator';

/* Project Types */
import * as Models                                    from 'src/Models';
import { appNavigatorClasses }                        from './Styles';

/* Project Methods */
import { setCurrentUserAction }                       from '../../State/Actions/userActions';

const mapStateToProps = (state: Models.StateType) => {
  return {
    authState:    state.authState,
    currentUser:  state.currentUser,
  }
}

export default connect(mapStateToProps, { setCurrentUserAction })(withStyles(appNavigatorClasses, {withTheme: true})(AppNavigator));