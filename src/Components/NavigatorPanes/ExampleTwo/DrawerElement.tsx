import * as React                                     from 'react';

import ListItem                                       from '@material-ui/core/ListItem';
import ListItemIcon                                   from '@material-ui/core/ListItemIcon';
import ListItemText                                   from '@material-ui/core/ListItemText';
import InboxIcon                                      from '@material-ui/icons/MoveToInbox';

import { ClickHandlerFunc }                           from '../Types';

const drawerJSX = (clickHandler:ClickHandlerFunc) => (
  <ListItem button={true} id="ex2" onClick={clickHandler}>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="Example Two" />
  </ListItem>
);

export default drawerJSX;