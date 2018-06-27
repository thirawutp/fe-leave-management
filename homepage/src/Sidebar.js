import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className='sidebar-header'>
          header
          </div>
        <ul className='sidebar-list'>
          <li className='sidebar-item'>Home</li>
          <li className='sidebar-item'>สถิติการลา</li>
          <li className='sidebar-item'>Approve</li>
          <li className='sidebar-item'>Logout</li>
        </ul>
      </div>



    );
  }
}

export default Sidebar;
