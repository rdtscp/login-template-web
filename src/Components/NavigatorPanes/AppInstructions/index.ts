import { NavigatorJSXGenerator }                      from '../Types';

import drawerJSX                                      from './DrawerElement';
import paneJSX                                        from './PaneElement';


const paneTitle       = 'App Instructions';
const drawerElement   = drawerJSX;
const paneElement     = paneJSX;

export const AppInstructions: NavigatorJSXGenerator = {
  drawerElement,
  paneElement,
  paneTitle,
};