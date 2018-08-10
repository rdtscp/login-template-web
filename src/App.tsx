import * as React from 'react';

import CssBaseline                                    from '@material-ui/core/CssBaseline';
import {  MuiThemeProvider }                          from '@material-ui/core/styles';

import DeviceList                                     from './Components/DeviceList';

import LoginForm                                      from './Components/LoginForm';

import IDeviceType                                    from './Components/Device/types';


import appTheme                                       from './theme';

class App extends React.Component<{}, { dummyDeviceList: IDeviceType[], test: boolean }> {

  constructor(props: any) {
    super(props);
    this.state = {
      dummyDeviceList: [
        {
          lastUsed:       '7 Aug, 02:12:34',
          logout:         this.testFunc,
          thisDevice:     false,
          userAgentStr:   'Firefox on Windows'
        },
        {
          lastUsed:       '9 Aug, 02:12:34',
          logout:         this.testFunc,
          thisDevice:     true,
          userAgentStr:   'Chrome on Mac OS'
        },
        {
          lastUsed:       '7 Aug, 02:12:34',
          logout:         this.testFunc,
          thisDevice:     false,
          userAgentStr:   'Safari on iOS'
        },
        {
          lastUsed:       '7 Aug, 02:12:34',
          logout:         this.testFunc,
          thisDevice:     false,
          userAgentStr:   'Chromium on Windows'
        },
      ] as IDeviceType[],
      test: false,
    }
    this.render.bind(this);
  }

  public render() {
    if(this.state.test) {
      return (
        <MuiThemeProvider theme={appTheme}>
          <CssBaseline />
          <DeviceList devices={this.state.dummyDeviceList as IDeviceType[]} onDeviceClick={this.testFunc} />
        </MuiThemeProvider>
      );
    }
    else {
      return (
        <MuiThemeProvider theme={appTheme}>
          <CssBaseline />
          <LoginForm />
        </MuiThemeProvider>
      );
    }
  }

  private testFunc = (arg1: any) => {
    alert('Test');
  }

}

export default App;
