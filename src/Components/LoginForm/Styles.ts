import { Theme }                from '@material-ui/core/styles';

import { createStyles }         from '@material-ui/core';
import { WithStyles }           from '@material-ui/core/styles/withStyles';

const loginFormClasses = (theme: Theme) => createStyles({
  buttonsContainer: {
    paddingTop:       15,
    width:            231.5,
  },
  buttonsStyle: {
    marginLeft:       13,
    marginRight:      13,
  },
  form: {
    display:          'flex',
    flexWrap:         'wrap',
  },
  formContainer: {
    height:           '100vh',
    width:            227,
  },
  loginContainer: {
    alignItems:       'center',
    display:          'flex',
    justifyContent:   'center',
    paddingTop:        100,
  },
  textField: {
    flexBasis:        200,
  },
});

interface ILoginFormStyle extends WithStyles<typeof loginFormClasses> {};

export { ILoginFormStyle, loginFormClasses };