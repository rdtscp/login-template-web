/* Import Types & Classes */
import NavigatorPane                                  from './NavigatorPane';
import { ClickHandlerFunc }                           from "./Types";

/* Import all your NavigatorPanes here */
import { AppInstructions }                            from './AppInstructions';
import { ExamplePane }                                from './ExamplePane';

/* Put your NavigatorPanes here in the order you want them to appear. */
const navigatorPanes: (clickHandler: ClickHandlerFunc) => NavigatorPane[] = (clickHandler: ClickHandlerFunc) => [
  (new NavigatorPane(clickHandler, 'applicationInstructions', AppInstructions)),
  (new NavigatorPane(clickHandler, 'examplePane', ExamplePane)),
]

export default navigatorPanes;