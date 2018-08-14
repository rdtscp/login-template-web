import { ClickHandlerFunc, NavigatorPane }            from '../Types';

import drawerJSX                                      from './DrawerElement';
import paneJSX                                        from './PaneElement';

const ExampleOne: ((clickHandler: ClickHandlerFunc) => NavigatorPane) = (clickHandler: ClickHandlerFunc) => {
  const drawerElement = drawerJSX(clickHandler);
  const paneElement   = paneJSX;
  return {
    drawerElement,
    paneElement,
    paneTitle:        'Example One',
    selectorID:       'ex1'
  }
}

export default ExampleOne;