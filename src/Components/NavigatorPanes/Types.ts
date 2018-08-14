interface INavigatorPane {
  drawerElement:    JSX.Element;
  paneElement:      JSX.Element;
  paneTitle:        string;
  selectorID:       string;
}

type ClickHandlerFunc = (clickEvent: React.MouseEvent<HTMLElement>) => void;

type NavigatorPane = INavigatorPane;

export { NavigatorPane, ClickHandlerFunc };