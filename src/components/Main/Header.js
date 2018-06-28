import React, { Component } from 'react';
import appmanheader from '../../asset/images/appmanheader.png';
import '../../App.css';


class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logonew'>
          <img src={appmanheader} width="139" height="25" />
        </div>
      </div>
    );
  }
}

export default Header;
