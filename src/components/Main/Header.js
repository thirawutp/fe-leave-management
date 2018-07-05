import React, { Component } from 'react';
import '../../App.css';
import kendall from '../../asset/images/kendall.jpg';


class Header extends Component {

constructor(props) {
  super(props);
  this.state = {
    Name: 'Kendall Jenner',
    Section: 'Developer',
    Position: 'Backend',
    StaffID: '12345'
  }
}
  render() {
    return (
      <div className="Header">
      	<div className="userpicture">
      		<img src={kendall} width="50" height="50"  />
      	</div>
      	<div className='user'>
      	<div className='username'>
            <p><b></b>{this.state.Name}</p>
          </div>
          <div className='section'>
            <p><b>Section: </b>{this.state.Section}</p>
          </div>
          <div className='position'>
            <p><b>Position: </b>{this.state.Position}</p>
          </div>
          <div className='staffID'>
            <p><b>Staff   ID: </b>{this.state.StaffID}</p>
          </div>
		    </div>
      </div>
    );
  }
}


export default Header;
