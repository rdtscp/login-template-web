/* App/index.ts */

/* Redux Methods */
import { connect }                                    from 'react-redux';

/* Material-UI Components */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Project Components */
import App                                            from './App';

/* Project Types */
import { IStateType }                                 from 'src/State';
import { appClasses }                                 from './Styles';

/* Project Methods */
import { setAuthStateAction }                         from 'src/State/Actions/authActions';
import { setCurrentUserAction }                       from 'src/State/Actions/userActions';

const mapStateToProps = (state: IStateType) => {
  return {
    authState:    state.authState,
    currentUser:  state.currentUser,
  }
}

export default connect(mapStateToProps, { setAuthStateAction, setCurrentUserAction })(withStyles(appClasses)(App));