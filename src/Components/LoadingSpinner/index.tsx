import * as React from 'react';

class LoadingSpinner extends React.Component<any, any> {

  public render() {
    return (
      <div className="spinner-container">
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"/>
            </div>
            <div className="gap-patch">
              <div className="circle"/>
            </div>
            <div className="circle-clipper right">
              <div className="circle"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default LoadingSpinner;