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
      <div className="account-container" style={{borderRadius: 20}}>
        <div className="left-pane" style={{borderRight: '2px solid white', backgroundColor: '#4285f4', padding: 40, fontSize: 23, textAlign: 'left'}}>
          <List clickListEntry={this.clickListEntry} listEntryMap={this.state.settingsMap} activeListEntry={this.state.activeListEntry} />
        </div>
        <div className="right-pane" style={{backgroundColor: '#F1F2EE'}}>
          {this.state.settingsMap[this.state.activeListEntry]}
        </div>
      </div>
    );
  }
}

export default Account;