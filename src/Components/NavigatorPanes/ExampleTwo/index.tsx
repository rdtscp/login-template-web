import { ClickHandlerFunc, NavigatorPane }            from '../Types';

import drawerJSX                                      from './DrawerElement';
import paneJSX                                        from './PaneElement';

const ExampleTwo: ((clickHandler: ClickHandlerFunc) => NavigatorPane) = (clickHandler: ClickHandlerFunc) => {
  const drawerElement = drawerJSX(clickHandler);
  const paneElement   = paneJSX;
  return {
    drawerElement,
    paneElement,
    paneTitle:        'Example Two',
    selectorID:       'ex2',
  }
}

export default ExampleTwo;