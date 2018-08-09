import React, { Component } from 'react';

class LeftPaneEntry extends Component {

  handleClick = () => {
    this.props.clickOption(this.props.name);
  }

  render = () => {
    return (
      <div className="list-entry" onClick={this.handleClick} style={{cursor:'pointer'}}>
        <a style={{cursor:'pointer', color: 'white'}}>{this.props.name}</a>
      </div>
    );
  }

}

export default LeftPaneEntry;