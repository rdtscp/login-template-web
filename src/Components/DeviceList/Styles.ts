import { Theme } from '@material-ui/core/styles';

import { createStyles }         from '@material-ui/core';
import { WithStyles }           from '@material-ui/core/styles/withStyles';

const deviceListClasses = (theme: Theme) => createStyles({
});

interface IDeviceListStyle extends WithStyles<typeof deviceListClasses> {};

export { deviceListClasses, IDeviceListStyle };