import * as React from 'react';

class LeftPaneEntry extends React.Component<ILeftPaneEntryProps, any> {

  public render = () => {
    return (
      <div className="list-entry" onClick={this.handleClick} style={{cursor:'pointer'}}>
        <a style={{cursor:'pointer', color: 'white'}}>{this.props.name}</a>
      </div>
    );
  }

  private handleClick = () => {
    this.props.clickOption(this.props.name);
  }

}

interface ILeftPaneEntryProps {
  clickOption:  (listEntryName: string) => void;
  key:          number;
  name:         string;
}

export default LeftPaneEntry;