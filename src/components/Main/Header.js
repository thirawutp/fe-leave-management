import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import kendall from '../../asset/images/kendall.jpg';

import { setProfile } from '../../action';



class Header extends Component {
  constructor(props) {
    super(props);


    this.state = {
      people: []

    }
  }
  render() {
    const { people } = this.props
    console.log("CCCCCCAAATTT", people)
    return (
      <div className="Header">
        <div className="userpicture">
          <img src={kendall} width="50" height="50" />
        </div>
        <div className='user'>
          <div className='username'>
            <p><b></b>{people.firstName}</p>
          </div>
          <div className='section'>
            <p><b>Section: </b>{people.section}</p>
          </div>
          <div className='position'>
            <p><b>Position:</b>{people.department}</p>
          </div>
          <div className='staffID'>
            <p><b>StaffID:</b>{people.staffId}</p>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  people: state.person

})

const mapDispatchToProps = dispatch => ({
  setProfile: (person) => dispatch(setProfile(person))
})



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
