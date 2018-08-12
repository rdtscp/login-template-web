import * as React from 'react';

/* Component Imports */
import Button                                         from '@material-ui/core/Button';
import Paper                                          from '@material-ui/core/Paper';
import Typography                                     from '@material-ui/core/Typography';

/* Type Imports */
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
      <div className={classes.deviceContainer}>
        <Paper className={classes.root} elevation={5}>
          <Typography variant="title" >
            {this.props.userAgentStr}
          </Typography>
          <Typography className={lastActiveClass} variant="subheading">
            <Button onClick={this.handleLogoutClick} variant="contained" color="primary" >Logout</Button>  &nbsp;&nbsp;        
            {lastActiveContent} 
          </Typography>
        </Paper>
      </div>
    );
  }

  private handleLogoutClick = () => {
    this.props.logout(this.props.id, this.props.authToken);
  }

}

export default Device;