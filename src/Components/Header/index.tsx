import * as React from 'react';

class Header extends React.Component<IHeaderProps, any> {

  /* @TODO Create Slide-Out Menu that can take an Array of 'Keys' as options. */

  public render() {
    return (
      <div style={{height: 64, width: '100%', backgroundColor: '#4285F4', padding: 11}}>
        <a onClick={this.clickMenu} className="material-icons" style={{color: 'white', fontSize: '3rem', cursor:'pointer'}}>menu</a>
      </div>
    );
  }

  public clickMenu = () => {
    // console.log('TODO: Open Side Menu');
    this.clickOption('Delete Account');
  }

  private clickOption = (optionName: string) => {
    this.props.clickOption(optionName);
  }

}

interface IHeaderProps {
  clickOption:  (optionName: string) => void;
  options:       any;
}

export default Header;