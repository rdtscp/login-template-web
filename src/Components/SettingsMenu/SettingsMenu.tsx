/* Components/SettingsMenu/SettingsMenu.tsx */

import * as React                                     from 'react';

/* Component Imports */
import AppBar                                         from '@material-ui/core/AppBar';
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
import { SettingsMenuProps }                          from './Types';

class SettingsMenu extends React.Component<SettingsMenuProps> {

  public render() {
    const { classes, currentUser } = this.props;
    
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
          </Toolbar>
        </AppBar>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <SmartphoneIcon /> &nbsp;&nbsp;&nbsp;
            <Typography className={classes.heading}> Device Settings</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <DeviceList devices={currentUser.devices} />
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

}

export default SettingsMenu;