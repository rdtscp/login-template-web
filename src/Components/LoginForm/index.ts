/* Redux */
import { connect }                                    from 'react-redux';
import { loginAction }                                from '../../State/Actions/authActions';

/* Material-UI Styling */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Component View */
import LoginForm                                      from './LoginForm';
import { loginFormClasses }                           from './Styles';

export default connect(null, { loginAction })(withStyles(loginFormClasses)(LoginForm));