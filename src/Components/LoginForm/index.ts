/* Components/LoginForm/index.ts */

/* Redux Methods */
import { connect }                                    from 'react-redux';

/* Project State Types */
import * as Models                                    from 'src/Models';

/* Project State Methods */
import { setAuthStateAction }                         from '../../State/Actions/authActions';
import { setCurrentUserAction }                       from '../../State/Actions/userActions';

/* Material-UI Methods */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Project Components */
import LoginForm                                      from './LoginForm';

/* Project Types */
import { loginFormClasses }                           from './Styles';

const mapStateToProps = (state: Models.StateType) => {
  return {
    authState: state.authState,
  }
}

export default connect(mapStateToProps, { setAuthStateAction, setCurrentUserAction })(withStyles(loginFormClasses)(LoginForm));