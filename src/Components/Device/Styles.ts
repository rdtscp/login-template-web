import { Theme } from '@material-ui/core/styles';

import { createStyles }         from '@material-ui/core';
import { WithStyles }           from '@material-ui/core/styles/withStyles';

const deviceClasses = (theme: Theme) => createStyles({
  activeDevice: {
    ...theme.typography.button,
    color:  'green',
  },
  deviceContainer: {
    width: 267,
  }
});

interface IDeviceStyle extends WithStyles<typeof deviceClasses> {};

export { deviceClasses, IDeviceStyle };