import { ClickHandlerFunc, NavigatorJSXGenerator }    from "./Types";

export default class NavigatorPane {
  
  public  selectorID:     string;
  public drawerElement:  (clickHandler: ClickHandlerFunc, selectorID: string, key: number) => JSX.Element;;
  public paneElement:    JSX.Element;
  public paneTitle:      string;
  
  private clickHandler:  ClickHandlerFunc;

  constructor(clickHandler: ClickHandlerFunc, selectorID: string, navElements: NavigatorJSXGenerator) {
    this.drawerElement  = navElements.drawerElement;
    this.paneElement    = navElements.paneElement;
    this.paneTitle      = navElements.paneTitle;
    this.selectorID     = selectorID;

    this.clickHandler   = clickHandler;
  }

  public getDrawer(index: number) {
    return this.drawerElement(this.clickHandler, this.selectorID, index);
  }

}