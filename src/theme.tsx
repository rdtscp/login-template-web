import blue  from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
// import pink  from '@material-ui/core/colors/pink';

import { createMuiTheme } from '@material-ui/core/styles';

const appTheme = createMuiTheme({
  palette: {
    primary:    blue,
    secondary:  green,
  },
});

export default appTheme;