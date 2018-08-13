/* Components/AppNavigator/index.ts */

/* Redux Components */
import { connect }                                    from 'react-redux';

/* Material-UI Components */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Project Components */
import AppNavigator                                   from './AppNavigator';

/* Project Types */
import { IStateType }                                 from '../../State';
import { appNavigatorClasses }                        from './Styles';

const mapStateToProps = (state: IStateType) => {
  return {
    authState:    state.authState,
    currentUser:  state.currentUser,
  }
}

export default connect(mapStateToProps, {})(withStyles(appNavigatorClasses, {withTheme: true})(AppNavigator));