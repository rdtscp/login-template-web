import React, { Component } from 'react';

class Header extends Component {

  /* @TODO Create Slide-Out Menu that can take an Array of 'Keys' as options. */

  clickMenu = () => {
    console.log('TODO: Open Side Menu');
    this.clickOption('Delete Account');
  }

  clickOption = (optionName) => {
    this.props.clickOption(optionName);
  }

  render = () => {
    return (
      <div style={{height: 64, width: '100%', backgroundColor: '#4285F4', padding: 11}}>
        <a onClick={this.clickMenu} className="material-icons" style={{color: 'white', fontSize: '3rem', cursor:'pointer'}}>menu</a>
      </div>
    );
  }

}

export default Header;