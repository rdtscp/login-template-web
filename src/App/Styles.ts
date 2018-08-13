/* App/Styles.ts */

/* Material-UI Types */
import { Theme }                                      from '@material-ui/core/styles';

/* Material-UI Methods */
import { createStyles }                               from '@material-ui/core';
import { WithStyles }                                 from '@material-ui/core/styles/withStyles';

const appClasses = (theme: Theme) => createStyles({
  loadingContainer: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  }
});

interface IAppStyle extends WithStyles<typeof appClasses> {};

export { appClasses, IAppStyle };