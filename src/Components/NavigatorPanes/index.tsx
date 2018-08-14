import { ClickHandlerFunc, NavigatorPane }            from './Types';

/* Import all your NavigatorPanes here */
import ExampleOne                                     from './ExampleOne';
import ExampleTwo                                     from './ExampleTwo';

/* Put your NavigatorPanes here in the order you want them to appear. */
const navigatorPanes: (clickHandler: ClickHandlerFunc) => NavigatorPane[] = (clickHandler: ClickHandlerFunc) => [
  (ExampleOne(clickHandler)),
  (ExampleTwo(clickHandler)),
]

export default navigatorPanes;