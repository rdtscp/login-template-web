import React, { Component } from 'react';

class LoadingSpinner extends Component {

  render = () => {
    return (
      <div className="spinner-container">
        <div className="preloader-wrapper active">
          <div className="spinner-layer">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default LoadingSpinner;