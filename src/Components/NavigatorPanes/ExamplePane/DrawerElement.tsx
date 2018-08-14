import * as React                                     from 'react';

import ListItem                                       from '@material-ui/core/ListItem';
import ListItemIcon                                   from '@material-ui/core/ListItemIcon';
import ListItemText                                   from '@material-ui/core/ListItemText';
import CodeIcon                                       from '@material-ui/icons/Code';

import { ClickHandlerFunc }                           from '../Types';

const drawerJSX: ((clickHandler: ClickHandlerFunc, uniqueID: string, key: number) => JSX.Element) = (clickHandler: ClickHandlerFunc, uniqueID: string, key: number) => (
  <ListItem button={true} id={uniqueID} onClick={clickHandler} key={key}>
    <ListItemIcon>
      <CodeIcon />
    </ListItemIcon>
    <ListItemText primary="Example Two" />
  </ListItem>
);

export default drawerJSX;