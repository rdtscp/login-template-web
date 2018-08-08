import React, { Component } from 'react';

class ListEntry extends Component {

  handleClick = () => {
    this.props.clickListEntry(this.props.name);
  }

  render = () => {
    // Create a list of SettingsPanes.
    let listEntryStyle={
      cursor:'pointer',
      color: '#D2D6D8'
    };
    if (this.props.entryActive) listEntryStyle.color = 'white';
    return (
      <div className="list-entry" onClick={this.handleClick} style={{cursor:'pointer'}}>
        <a style={listEntryStyle}>{this.props.name}</a>
      </div>
    );
  }

}

export default ListEntry;