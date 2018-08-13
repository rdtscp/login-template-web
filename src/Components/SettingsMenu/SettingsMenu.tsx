/* Components/SettingsMenu/SettingsMenu.tsx */

import * as React                                     from 'react';

/* Component Imports */
import AppBar                                         from '@material-ui/core/AppBar';
import Button                                         from '@material-ui/core/Button';
import ExpansionPanel                                 from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails                          from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary                          from '@material-ui/core/ExpansionPanelSummary';
import IconButton                                     from '@material-ui/core/IconButton';
import Toolbar                                        from '@material-ui/core/Toolbar';
import Typography                                     from '@material-ui/core/Typography';
import ArrowBackIcon                                  from '@material-ui/icons/ArrowBack';
import DeleteForeverIcon                              from '@material-ui/icons/DeleteForever';
import ExpandMoreIcon                                 from '@material-ui/icons/ExpandMore';
import SmartphoneIcon                                 from '@material-ui/icons/Smartphone';

/* Project Components */
import ConfirmDelete                                  from './ConfirmDelete';
import DeviceList                                     from './DeviceList';

/* Project Types */
import * as Models                                    from '../../Models';
import { SettingsMenuProps }                          from './Types';

class SettingsMenu extends React.Component<SettingsMenuProps> {

  public render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar color="default" position="static">
          <Toolbar>
            <IconButton onClick={this.props.closeSettings} className={classes.menuButton} color="inherit" aria-label="Menu">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Settings
            </Typography>
            <Button onClick={this.logout} variant="outlined" color="secondary">
              Log Out
            </Button>
          </Toolbar>
        </AppBar>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <SmartphoneIcon /> &nbsp;&nbsp;&nbsp;
            <Typography className={classes.heading}> Device Settings</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <DeviceList />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <DeleteForeverIcon /> &nbsp;&nbsp;&nbsp;
            <Typography className={classes.heading}>Delete Account</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <div className={classes.deleteAccountContainer}>
            <ConfirmDelete />
          </div>
            
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }

  private logout = () => {
    const authToken = this.props.authState.authToken;
    const thisDevice: Models.Device = this.props.devices.filter(device => device.authToken === authToken)[0];
    this.logoutDevice(thisDevice.id, authToken)
  }

  private logoutDevice = (deviceID: string, deviceAuthToken: string) => {
    Models.DeviceAPI.destroy(this.props.authState.authToken, deviceID, deviceAuthToken)
    .then(({ error, warning, message, content }: Models.DeviceResponseData) => {
      if (error) {
        alert('Error: ' + message);
        this.props.setAuthStateAction('');
      }
      else if (warning) {
        alert('Warning: ' + message);
      }
      else if (this.props.authState.authToken === deviceAuthToken) {
        alert('Logging Out...');
        this.props.setAuthStateAction('');
      }
      else {
        alert('Info: ' + message);
        this.props.setCurrentUserAction(this.props.authState.authToken);
      }
    })
    .catch((err: any) => {
      alert('Unexpected Error, Please Refresh & Try Again');
      window.location.reload();
    });
  }

}

export default SettingsMenu;