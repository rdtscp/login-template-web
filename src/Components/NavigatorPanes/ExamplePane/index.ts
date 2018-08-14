import { NavigatorJSXGenerator }                      from '../Types';

import drawerJSX                                      from './DrawerElement';
import paneJSX                                        from './PaneElement';


const paneTitle       = 'Example Two';
const drawerElement   = drawerJSX;
const paneElement     = paneJSX;

export const ExamplePane: NavigatorJSXGenerator = {
  drawerElement,
  paneElement,
  paneTitle,
};