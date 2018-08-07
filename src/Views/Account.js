import React, { Component } from 'react';

import * as Panes from '../Components/Panes';
import { List } from '../Components';

class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeListEntry: 'Devices',
      settingsMap: {
        'Devices':        <Panes.Devices />,
        'Delete Account': <Panes.DeleteAccount />
      }
    };
  }


  clickListEntry = (entryName) => {
    this.setState({
      activeListEntry: entryName
    });
  }

  render = () => {
    return (
      <div className="account-container">
        <div className="left-pane">
          <List clickListEntry={this.clickListEntry} listEntryMap={this.state.settingsMap} activeListEntry={this.state.activeListEntry} />
        </div>
        <div className="right-pane">
          {this.state.settingsMap[this.state.activeListEntry]}
        </div>
      </div>
    );
  }
}

export default Account;