/* React/Redux/Other */
import * as React                                     from 'react';

/* This Project */
import * as Models                                    from 'src/Models/';

/* This Component */
import drawerJSX                                      from './DrawerJSX';
import ExamplePane                                    from './ExamplePane';


/* Change your Pane Title */
const paneTitle       = 'Component Example';

/* Do NOT Change */
const drawerElement   = drawerJSX;

/* ONLY change the Variable Name of what you want your Pane to be called */
export const examplePane: Models.NavigatorJSXGenerator = {
  drawerElement,
  paneElement: (<ExamplePane />),
  paneTitle,
};