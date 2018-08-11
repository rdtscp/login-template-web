import { Theme }                                      from '@material-ui/core/styles';

import { createStyles }                               from '@material-ui/core';
import { WithStyles }                                 from '@material-ui/core/styles/withStyles';

const appClasses = (theme: Theme) => createStyles({
});

interface IAppStyle extends WithStyles<typeof appClasses> {};

export { appClasses, IAppStyle };