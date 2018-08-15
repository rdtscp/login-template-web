/* Components/SettingsMenu/ConfirmDelete/index.ts */

/* Redux Methods */
import { connect }                                    from 'react-redux';

/* Material-UI Components */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Project Components */
import ConfirmDelete                                  from './ConfirmDelete';

/* Project Types */
import * as Models                                    from 'src/Models';
import { confirmDeleteClasses }                       from './Styles';

/* Project Methods */
import { setAuthStateAction }                         from '../../../State/Actions/authActions';

const mapStateToProps = (state: Models.StateType) => {
  return {
    authState:  state.authState,
  }
}

export default connect(mapStateToProps, { setAuthStateAction })(withStyles(confirmDeleteClasses)(ConfirmDelete));
