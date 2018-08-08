import React, { Component } from 'react';

class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: ""
    };
  }
    
  render = () => {
    let buttonClassName = "waves-effect waves-light btn";
    if (this.props.danger) {
      buttonClassName += " red darken-2";
    }
    else if (this.props.warning) {
      buttonClassName += " yellow darken-2";
    }
    else {
      buttonClassName += " blue";
    }
    return (
        <a className={buttonClassName} onClick={this.props.onClick}>{this.state.title}</a>
    );
  }

}

export default Button;