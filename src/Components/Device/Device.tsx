import * as React from 'react';

/* Component Imports */
import Button                                         from '@material-ui/core/Button';
import Card                                           from '@material-ui/core/Card';
import CardActions                                    from '@material-ui/core/CardActions';
import CardContent                                    from '@material-ui/core/CardContent';
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
        <Card style={{borderRadius: 0}}>
          <CardContent style={{paddingBottom: 5}}>
            <Typography variant="title" >
              {this.props.userAgentStr}
            </Typography>
            <Typography className={lastActiveClass} variant="subheading">
              {lastActiveContent}
            </Typography>
          </CardContent>
          <CardActions style={{paddingTop: 5, paddingLeft: 20, paddingBottom: 16}}>
            <Button onClick={this.handleLogoutClick} variant="contained" color="primary" >Logout</Button>
          </CardActions>
        </Card>
      </div>
    );
  }

  private handleLogoutClick = () => {
    this.props.logout(this.props.key);
  }

}

export default Device;