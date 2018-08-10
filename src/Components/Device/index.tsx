import withStyles                                     from '@material-ui/core/styles/withStyles';

import Device                                         from './Device';
import { deviceClasses }                              from './styles';

export default withStyles(deviceClasses)(Device);