/* Components/AppNavigator/index.ts */

/* Redux Components */
import { connect }                                    from 'react-redux';

/* Material-UI Components */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* Project Components */
import AppNavigator                                   from './AppNavigator';

/* Project Types */
import { appNavigatorClasses }                        from './Styles';

export default connect(null, {})(withStyles(appNavigatorClasses, {withTheme: true})(AppNavigator));