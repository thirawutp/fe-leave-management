import React, { Component } from 'react';

import _ from 'lodash'
import kendall from '../../asset/images/kendall.jpg';
import axios from 'axios';
import { connect } from 'react-redux';
import { setProfile, addApprove } from '../../action';



class Header extends Component {
  constructor(props) {
    super(props);


    this.state = {
      people: []

    }
  }

  componentDidMount() {
    const { staffId } = this.props
    console.log('TTTTTTT', staffId)

    axios.get(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/Leaves/RemainingLeaveInfo?staffId=${staffId}`) //searchApprove
      .then(res => {
        const data = res.data.map(p => {
          return _.reduce(p, (result, val, key) => {
            if (key === 'ApprovedBy') {
              return {
                ...result,
                [_.camelCase(key)]: val || '-'
              }
            }
            if (key === 'LeaveId') {
              return {
                ...result,
                rawLeaveId: val,
                [_.camelCase(key)]: `LEV${_.padStart(val, 5, '0')}`
              }
            }

            return {
              ...result,
              [_.camelCase(key)]: val
            }
          }, {})
        })
        this.props.addApprove(data)
      })
  }

  render() {
    const { people = {} } = this.props
    console.log("CCCCCCAAATTT", people)
    return (
      <div className="Header">
        <div className="userpicture">
          <img src={kendall} width="50" height="50" />
        </div>
        <div className='user'>
          <div className='username'>

            <p><b></b>{people.Name}</p>
          </div>
          <div className='section'>
            <p><b>Section: </b>{people.Department}</p>

          </div>
          <div className='position'>
            <p><b>Position:</b>{people.Position}</p>
          </div>
          <div className='staffID'>
            <p><b>StaffID:</b>{people.StaffID}</p>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log("1", state)
  return {
    staffId: state.staffId,
    people: state.person

  }
}

const mapDispatchToProps = dispatch => ({
  setProfile: (person) => dispatch(setProfile(person)),
  addApprove: (approve) => dispatch(addApprove(approve))
})



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
