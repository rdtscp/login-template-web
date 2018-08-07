import React, { Component } from 'react';

import { LoadingBar } from '../Components';

class Landing extends Component {

  render() {
    return (
      <div className="landing-page">
        <LoadingBar message={this.props.message} />
      </div>
    );
  }

}

export default Landing;
