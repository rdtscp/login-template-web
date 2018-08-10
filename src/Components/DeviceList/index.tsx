import withStyles                                     from '@material-ui/core/styles/withStyles';

import DeviceList                                     from './DeviceList';
import { deviceListClasses }                          from './styles';

export default withStyles(deviceListClasses)(DeviceList);