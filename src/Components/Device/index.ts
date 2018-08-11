/* Redux */

/* Material-UI Styling */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Component View */
import Device                                         from './Device';
import { deviceClasses }                              from './Styles';

export default withStyles(deviceClasses)(Device);