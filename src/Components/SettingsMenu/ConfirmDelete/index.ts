/* Components/SettingsMenu/ConfirmDelete/index.ts */

/* Redux Methods */
import { connect }                                    from 'react-redux';

/* Material-UI Components */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Project Components */
import ConfirmDelete                                  from './ConfirmDelete';

/* Project Types */
import { IStateType }                                 from '../../../State';
import { confirmDeleteClasses }                       from './Styles';

/* Project Methods */
import { setAuthStateAction }                         from '../../../State/Actions/authActions';

const mapStateToProps = (state: IStateType) => {
  return {
    authState:  state.authState,
  }
}

export default connect(mapStateToProps, { setAuthStateAction })(withStyles(confirmDeleteClasses)(ConfirmDelete));
