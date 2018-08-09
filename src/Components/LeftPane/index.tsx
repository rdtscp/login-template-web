import * as React from 'react';

import { LeftPaneEntry } from '../';

class LeftPane extends React.Component<ILeftPaneProps, any>{

  public render() {
    // Create a list of SettingsPanes.
    const listEntries = this.props.options.map((optionName: string, index: number) =>
      <LeftPaneEntry clickOption={this.handleListEntryClick} key={index} name={optionName} />
    );
    return (
      <div className="left-pane" style={{borderRight: '2px solid white', backgroundColor: '#4285F4', padding: 30, fontSize: 23, textAlign: 'left'}}>
        {listEntries}
      </div>
    );
  }
  
  private handleListEntryClick = (listEntryName: string) => {
    this.props.clickOption(listEntryName);
  }

}

interface ILeftPaneProps {
  clickOption:  (paneName: string) => void;
  options:      any;
}

export default LeftPane;