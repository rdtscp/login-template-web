import React, { Component } from 'react';

class LoadingBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: (this.props.width) ? this.props.width : 300
    };
  }
    
  render = () => {
    let message = this.props.message;
    if (message !== null) message += <br/>
    return (
      <div style={{width: this.state.width}}>
        {this.props.message}
        <div className="progress blue">
          <div className="indeterminate blue"></div>
        </div>
      </div>
    );
  }

}

export default LoadingBar;