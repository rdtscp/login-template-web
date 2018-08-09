import * as React from 'react';

class Button extends React.Component<IButtonProps, any>{
    
  public render = () => {
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
        <a className={buttonClassName} onClick={this.props.onClick}>{this.props.title}</a>
    );
  }

}

interface IButtonProps {
  title:    string;
  onClick:  () => void;
  danger?:  boolean;
  warning?: boolean;
}

export default Button;