import * as React from 'react';

import * as Panes from '../Components/Panes';

import { Header, LeftPane } from '../Components';

class Account extends React.Component<any, IAccountState>{

  constructor(props: any) {
    super(props);
    this.state = {
      activePane:   'Devices',
      settingsMap: {
        'Devices': <Panes.Devices />,
        'Delete Account': <Panes.DeleteAccount />
      },
      width: 0
    };
  }

  public componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  public componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  public render = () => {
    const paneOptions = Object.keys(this.state.settingsMap);
    
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

  private updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  }

  private selectSettingPane = (paneName: string) => {
    this.setState({
      activePane: paneName
    });
  }
}

interface IAccountState {
  activePane:   string;
  settingsMap:  any;
  width:        number;
}

export default Account;