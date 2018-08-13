/* Components/SettingsMenu/Device/index.ts */

/* Material-UI Components */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Project Components */
import Device                                         from './Device';
import { deviceClasses }                              from './Styles';

export default withStyles(deviceClasses)(Device);