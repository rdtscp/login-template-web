import React, { Component } from 'react';

import { ListEntry } from '../';

class List extends Component {

  handleListEntryClick = (listEntryName) => {
    this.props.activateListEntry(listEntryName);
  }
    
  render = () => {
    // Create a list of SettingsPanes.
    const listEntries = Object.keys(this.props.listEntryMap).map((entryName, index) =>
      <ListEntry clickListEntry={this.handleListEntryClick} entryActive={(entryName === this.props.activeListEntry) ? true : false} key={index} name={entryName} />
    );
    return (
      <div>
        {listEntries}
      </div>
    );
  }

}

export default List;