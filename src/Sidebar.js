import React, { Component } from 'react';
import './App.css';



class Sidebar extends Component {
  render() {
    return (
        <div>
          <div className='sidebar-header'>
            header
          </div>
            <ul className='sidebar-list'>
              <li className='sidebar-item'><a href="">Home</a></li>
              <li className='sidebar-item'><a href="">Static</a></li>
              <li className='sidebar-item'><a href="">Approve</a></li>
              <li className='sidebar-item'><a href="">Logout</a></li>
            </ul>
         </div>
     
     


    );
  }
}

export default Sidebar;
