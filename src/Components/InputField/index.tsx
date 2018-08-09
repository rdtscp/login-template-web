import * as React from 'react';

class InputField extends React.Component<IInputFieldProps, IInputFieldState>{

  constructor(props: IInputFieldProps) {
    super(props);
    this.state = {
      type: (this.props.type) ? this.props.type : 'text'
    };
  }
    
  public render() {
    return (
        <input onKeyDown={this.handleKeyPress} onChange={this.handleContentChange} type={this.state.type} placeholder={this.props.title}/>
    );
  }

  private handleContentChange = (event: any) => {
    this.props.onChange(event.target.value)
  }

  private handleKeyPress = (event: any) => {
    if (event.keyCode === 13) {
      this.props.onEnter();
    }
  }

}

interface IInputFieldProps {
  onChange: (contents: string) => void;
  onEnter:  () => void;
  title:    string;
  type?:    string;
}

interface IInputFieldState {
  type:     string;
}

export default InputField;