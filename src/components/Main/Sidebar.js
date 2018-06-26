import React, { Component } from 'react';
import dash from './images/dash.png';
import home from './images/home-3.png';
import chart from './images/line-chart.png';
import check from './images/check.png';
import logout from './images/logout.png';




class Sidebar extends Component {

constructor(props) {
  super(props);
  this.state = {
    Name: 'Dash',
    ID: 'Appman12345',
    Section: 'Developer',
    Position: 'Backend'
  }
}

  render() {
    return (
        <div className='Sidebar'>
          <div className='userpicture'>
            <img src={dash} width="105" height ="105"  />
          </div>
          <div className='Name'>
            <p><b></b>{this.state.Name}</p>
          </div>
          <div className='userdata'>
            <p><b>ID: </b>{this.state.ID}</p>
            <p><b>Section: </b>{this.state.Section}</p>
            <p><b>Position: </b>{this.state.Position}</p>
          </div>
            <ul className='sidebar-list'>
              <li className='sidebar-item'><a href=""><img src={home} width="25" height ="25"/>     Home</a></li>
              <li className='sidebar-item'><a href=""><img src={chart} width="25" height ="25"/>     Static</a></li>
              <li className='sidebar-item'><a href=""><img src={check} width="25" height ="25"/>     Approve</a></li>
              <li className='sidebar-item'><a href=""><img src={logout} width="25" height ="25"/>     Logout</a></li>
            </ul>
         </div>




    );
  }
}

export default Sidebar;
