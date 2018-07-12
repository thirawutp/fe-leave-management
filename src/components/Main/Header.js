import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import kendall from '../../asset/images/kendall.jpg';
import axios from 'axios';


class Header extends Component {
  render() {
    const {
      name,
      section = '',
      position = '',
      staffID = ''
    } = this.props
    return (
      <div className="Header">
        <div className="userpicture">
          <img src={kendall} width="50" height="50" />
        </div>
        <div className='user'>
          <div className='username'>
            <p><b></b>{name}</p>
          </div>
          <div className='section'>
            <p><b>Section: </b>{section}</p>
          </div>
          <div className='position'>
            <p><b>Position: </b>{position}</p>
          </div>
          <div className='staffID'>
            <p><b>Staff   ID: </b>{staffID}</p>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  name: _.get(state, 'profile.profileObj.name', ''),
  section: 'Developer',
  position: 'Frontend',
  staffID: '12345',
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
