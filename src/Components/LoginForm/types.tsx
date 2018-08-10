import { WithStyles } from '@material-ui/core/styles/withStyles';

import styles from './styles';

interface ILoginFormProps extends WithStyles<typeof styles> {
  login:        () => void;
  register:     () => void;
}

interface ILoginFormState {
  password:     string;
  showPassword: boolean;
  username:     string;
}

export { ILoginFormProps, ILoginFormState }