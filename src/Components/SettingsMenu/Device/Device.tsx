/* Components/SettingsMenu/Device/Device.tsx */

import * as React from 'react';

/* Material-UI Components */
import Button                                         from '@material-ui/core/Button';
import Paper                                          from '@material-ui/core/Paper';
import Typography                                     from '@material-ui/core/Typography';

/* Project Components */
import { DeviceProps }                                from './Types';

class Device extends React.Component<DeviceProps> {

  public render() {
    const { classes } = this.props;
    
    let lastActiveClass:    string = "";
    let lastActiveContent:  string = this.props.lastUsed;

    if (this.props.thisDevice === true) {
      lastActiveClass   = classes.activeDevice;
      lastActiveContent = "This Device";
    }

    return (
      <Paper className={classes.root} elevation={5}>
        <Typography variant="title" >
          {this.props.userAgentStr}
        </Typography>
        <Typography className={lastActiveClass} variant="subheading">
          <Button onClick={this.handleLogoutClick} variant="contained" color="primary" >Logout</Button>  &nbsp;&nbsp;        
          {lastActiveContent} 
        </Typography>
      </Paper>
    );
  }

  private handleLogoutClick = () => {
    this.props.logout(this.props.id, this.props.authToken);
  }

}

export default Device;