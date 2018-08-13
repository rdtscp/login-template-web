/* Components/SettingsMenu/ConfirmDelete/index.ts */  //

/* Material-UI Components */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Project Components */
import ConfirmDelete                                  from './ConfirmDelete';
import { confirmDeleteClasses }                       from './Styles';

export default withStyles(confirmDeleteClasses)(ConfirmDelete);