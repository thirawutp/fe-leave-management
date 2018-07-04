import React, { Component } from 'react';
import '../../App.css';
import Header from './Header.js';
import { Link } from 'react-router';


class NavigationBar extends Component {
  render() {
    return (
      <div>
      	 <ul className='navigationbar-list'>
            <li className='navigationbar-item'>
                <Link to='/Leave'>leave</Link>
            </li>
            <li className='navigationbar-item'>
                <Link to='/History'>history</Link>
            </li>
            <li className='navigationbar-item'>
                <Link to='/Approve'>Approve</Link>
            </li>
          </ul>
      </div>
    );
  }
}



export default NavigationBar;

