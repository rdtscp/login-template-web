import * as React from 'react';

class LoadingBar extends React.Component<ILoadingBarProps, ILoadingBarState> {

  constructor(props: ILoadingBarProps) {
    super(props);
    this.state = {
      width: (this.props.width) ? this.props.width : 300
    };
  }
    
  public render() {
    let message = this.props.message;
    if (message !== null) { message += <br/> }
    return (
      <div style={{width: this.state.width}}>
        {this.props.message}
        <div className="progress blue">
          <div className="indeterminate blue lighten-4" />
        </div>
      </div>
    );
  }

}

interface ILoadingBarProps {
  message:  string;
  width?:   number;
}

interface ILoadingBarState {
  width:    number;
}

export default LoadingBar;