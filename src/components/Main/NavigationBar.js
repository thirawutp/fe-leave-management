import React, { Component } from 'react';
import './App.css';
import home from './home-3.png';
import chart from './line-chart.png';
import check from './check.png';
import logout from './logout.png';
import Header from './Header.js';

class NavigationBar extends Component {
  render() {
    return (
      <div>
      	 <ul className='navigationbar-list'>
          <li className='navigationbar-item'>
            <a><img src={home} width="25" height="25" />     Home</a>
          </li>
          <li className='navigationbar-item'>
            <a><img src={chart} width="25" height="25" />     Static</a>
          </li>
          <li className='navigationbar-item'>
            <a><img src={check} width="25" height="25" />     Approve</a>
          </li>
          <li className='navigationbar-item'>
            <a><img src={logout} width="25" height="25" />     Logout</a>
            </li>
        </ul>
        
      </div>
    );
  }
}

export default NavigationBar;
