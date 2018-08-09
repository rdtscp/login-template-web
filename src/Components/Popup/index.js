import React, { Component } from 'react';
import { Button } from '../';

class Popup extends Component {
    
  render = () => {
    if (this.props.clickOK === null || this.props.clickOK === undefined) {    
      return (
        <div></div>
      );
    }
    else {
      let style = "popup-info";
      // Determine Popup Style.
      switch (this.props.type) {
        case "error": {
          style = "popup-error"
          break;
        }
        case "warning": {
          style = "popup-warning";
          break;
        }
        case "info": {
          style = "popup-info";
          break;
        } 
        default: {
          style = "popup-info";
          break;
        }
      }
      return (
        <div className={style}>
          {this.props.message} <br/>
          <Button onClick={this.props.clickOK} />
        </div>
      );
    }
  }

}

export default Popup;