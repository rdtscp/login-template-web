/* Redux */
import { connect }                                    from 'react-redux';
import { IStateType }                                 from '../State';
import { checkAuthTokenAction }                       from '../State/Actions/authActions';

/* Material-UI Styling */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Component View */
import App                                            from './App';
import { appClasses }                                 from './Styles';

const mapStateToProps = (state: IStateType) => {
  return {
    authStatus: state.authState.authStatus,
  }
}

export default connect(mapStateToProps, { checkAuthTokenAction })(withStyles(appClasses)(App));
