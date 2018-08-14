export interface INavigatorJSXGenerator {
  drawerElement:  (clickHandler: ClickHandlerFunc, selectorID: string, key: number) => JSX.Element;
  paneElement:    JSX.Element;
  paneTitle:      string;
}

export type ClickHandlerFunc        = (clickEvent: React.MouseEvent<HTMLElement>) => void;
export type NavigatorJSXGenerator   = INavigatorJSXGenerator; 
