import React, { Component } from 'react';

import * as Panes from '../Components/Panes';
import { Header, LeftPane } from '../Components';

class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activePane: 'Devices',
      settingsMap: {
        'Devices':        <Panes.Devices />,
        'Delete Account': <Panes.DeleteAccount />
      },
      width: 0
    };
  }


  selectSettingPane = (paneName) => {
    this.setState({
      activePane: paneName
    });
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  }

  render = () => {
    let paneOptions = Object.keys(this.state.settingsMap);
    
    let settingsListPresentation = <Header clickOption={this.selectSettingPane} options={paneOptions} />;
    if (this.state.width >= 680) {
        settingsListPresentation = <LeftPane clickOption={this.selectSettingPane} options={paneOptions} />;
    }
    return (
      <div>
        {settingsListPresentation}
        <div className="right-pane" style={{backgroundColor: '#FAFAFA'}}>
            {this.state.settingsMap[this.state.activePane]}
          </div>
      </div>
    );
  }
}

export default Account;