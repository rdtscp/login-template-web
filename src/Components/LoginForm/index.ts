/* LoginForm Index */

/* Redux */
import { connect }                                    from 'react-redux';
import { setAuthState }                               from '../../State/Actions/authActions';

/* Material-UI Styling */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Component View */
import LoginForm                                      from './LoginForm';
import { loginFormClasses }                           from './Styles';


export default connect(null, { setAuthState })(withStyles(loginFormClasses)(LoginForm));