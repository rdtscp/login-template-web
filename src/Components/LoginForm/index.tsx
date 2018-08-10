/* Redux */
import { connect }                                    from 'react-redux';
import { loginAction }                                from '../../Actions/authActions';

/* Material-UI Styling */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Component View */
import LoginForm                                      from './LoginForm';
import { loginFormClasses }                           from './styles';

export default connect(null, { loginAction })(withStyles(loginFormClasses)(LoginForm));