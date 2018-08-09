import React, { Component } from 'react';

import { LeftPaneEntry } from '../';

class LeftPane extends Component {

  handleListEntryClick = (listEntryName) => {
    this.props.clickOption(listEntryName);
  }
    
  render = () => {
    // Create a list of SettingsPanes.
    const listEntries = this.props.options.map((optionName, index) =>
      <LeftPaneEntry clickOption={this.handleListEntryClick} key={index} name={optionName} />
    );
    return (
      <div className="left-pane" style={{borderRight: '2px solid white', backgroundColor: '#4285F4', padding: 30, fontSize: 23, textAlign: 'left'}}>
        {listEntries}
      </div>
    );
  }

}

export default LeftPane;