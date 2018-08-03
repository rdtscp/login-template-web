import React, { Component } from 'react';

import { Button } from '../';

class Device extends Component {

  logout = () => {
    localStorage.setItem('authToken', '');
    window.location.reload();
  }
    
  render = () => {
    return (
      <div>
        Device Settings Pane
        <br />
        <Button title="Logout" onClick={this.logout} />
      </div>
    );
  }

}

export default Device;