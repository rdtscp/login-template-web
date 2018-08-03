import React, { Component } from 'react';

import * as Panes from '../Components/Panes';
import { List } from '../Components';

class AccountPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeListEntry: 'Devices',
      listEntryMap: {
        'Devices': <Panes.Devices />,
        'Delete Account': <Panes.DeleteAccount />
      }
    };
  }

  activeListEntry = (entryName) => {
    this.setState({
      activeListEntry: entryName
    });
  }

  render = () => {
    return (
      <div className="account-container">
        <div className="left-pane">
          <List activateListEntry={this.activeListEntry} listEntryMap={this.state.listEntryMap} activeListEntry={this.state.activeListEntry} />
        </div>
        <div className="right-pane">
          {this.state.listEntryMap[this.state.activeListEntry]}
        </div>
      </div>
    );
  }
}

export default AccountPage;