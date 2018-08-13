/* App/Theme.ts */

/* Material-UI Components */
import blue                                           from '@material-ui/core/colors/blue';
import red                                            from '@material-ui/core/colors/red';

/* Material-UI Methods */
import { createMuiTheme }                             from '@material-ui/core/styles';

const appTheme = createMuiTheme({
  palette: {
    primary:    blue,
    secondary:  red,
    
  },
});

export { appTheme };