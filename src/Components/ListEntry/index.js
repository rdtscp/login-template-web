import React, { Component } from 'react';

class ListEntry extends Component {

  handleClick = () => {
    this.props.clickListEntry(this.props.name);
  }

  render = () => {
    // Create a list of SettingsPanes.
    if (this.props.entryActive) {
      return (
        <div className="settings-list-entry">
          <a onClick={this.handleClick}><b>{this.props.name}</b></a>
        </div>
      );
    }
    else {
      return (
        <div className="settings-list-entry">
          <a onClick={this.handleClick}>{this.props.name} </a>
        </div>
      );
    }
  }

}

export default ListEntry;