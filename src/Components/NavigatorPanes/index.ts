/* This Project */
import * as Models                                    from 'src/Models';
import { ClickHandlerFunc }                           from "src/Resources/Generics";

/* Import all your NavigatorPanes here */
import { appInstructions }                            from './AppInstructions';
import { examplePane }                                from './ExamplePane';

/* Put your NavigatorPanes here in the order you want them to appear. */
const generatePanes: (clickHandler: ClickHandlerFunc) => Models.NavigatorPane[] = (clickHandler: ClickHandlerFunc) => [
  (new Models.NavigatorPane(clickHandler, 'applicationInstructions', appInstructions)),
  (new Models.NavigatorPane(clickHandler, 'examplePane', examplePane)),
]

export default generatePanes;