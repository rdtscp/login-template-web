/* React/Redux/Other */
import * as React                                     from 'react';

/* This Project */
import * as Models                                    from 'src/Models/';

/* This Component */
import AppInstructionsPane                            from './AppInstructionsPane';
import drawerJSX                                      from './DrawerJSX';


/* Change your Pane Title */
const paneTitle       = 'App Instructions';

/* Do NOT Change */
const drawerElement   = drawerJSX;

/* Change paneElement to an instance of your Component */
export const appInstructions: Models.NavigatorJSXGenerator = {
  drawerElement,
  paneElement: (<AppInstructionsPane />),
  paneTitle,
};