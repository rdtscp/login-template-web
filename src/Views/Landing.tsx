import * as React from 'react';

import { LoadingBar } from '../Components';

class Landing extends React.Component<{ message: string; }, any> {

  public render() {
    return (
      <div className="landing-page">
        <LoadingBar message={this.props.message} />
      </div>
    );
  }

}

export default Landing;
