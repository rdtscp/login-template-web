import { NavigatorJSXGenerator }                      from '../Types';

import drawerJSX                                      from './DrawerElement';
import paneJSX                                        from './PaneElement';


/* Change your Pane Title */
const paneTitle       = 'Example Pane';

/* Do NOT Change */
const drawerElement   = drawerJSX;
const paneElement     = paneJSX;

/* ONLY change the Variable Name of what you want your Pane to be called */

export const ExamplePane: NavigatorJSXGenerator = {
  drawerElement,
  paneElement,
  paneTitle,
};