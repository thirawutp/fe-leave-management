import React, { Component } from 'react';
import _ from 'lodash';
import '../../App.css';
import axios from 'axios';
import { connect } from 'react-redux'
import { addProfile } from '../../action'

class TableSearchLeaveStatisticsDetails extends Component {
  constructor(props) {
    super(props);

    const staffId = _.last(window.location.pathname.split('/'))

    const person = _.find(props.table, item => item.staffId === staffId)
    const personProfile = _.find(props.profile, item => item.staffId === staffId)

    this.state = {
      person,
      personProfile,
      people: []
    }
  }



  componentDidMount() {



  }





  render() {
    const { people } = this.props
    console.log('people'), people
    return (
      <div>
        <div className="row">
          <div className="tkboth">
            <div className="row">
              <div className="gun">
                <p><b>Leave Statistic</b></p>
              </div>
            </div>
            <div className='tktabledetails'>
              <div className="row">
                <div className="col-md-3">
                  <p><b>ชื่อ : </b>{this.state.personProfile.firstName}</p>
                </div>
                <div className="col-md-3">
                  <p><b>สกุล : </b>{this.state.personProfile.lastName}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <p><b>StaffID : </b>{this.state.personProfile.staffId}</p>
                </div>
                <div className="col-md-3">
                  <p><b>Section : </b>{this.state.personProfile.section}</p>
                </div>
                <div className="col-md-3">
                  <p><b>Position : </b>{this.state.personProfile.position}</p>

                </div>
              </div>
            </div>
            <div className="Table">
              <div className="row">
                <div className="col-md-4">
                  <th>วันลาที่ใช้ไป</th>
                </div>
                <div className="col-md-4">
                  <th>Days</th>
                </div>
                <div className="col-md-4">
                  <th>Hours</th>
                </div>
              </div>

            </div>
            <div className="Data">
              <div className="row">

                <div className="col-md-4">
                  <td>Annual Leave</td>
                </div>
                <div className="col-md-4">
                  <td>{parseInt(this.state.person.annualHours / 8)}</td>
                </div>
                <div className="col-md-4">
                  <td>{(this.state.person.annualHours) % 8}</td>
                </div>

              </div>
            </div>
            <div className="Data">
              <div className="row">
                <div className="col-md-4">
                  <td>Sick Leave</td>
                </div>
                <div className="col-md-4">
                  <td>{parseInt(this.state.person.sickHours / 8)}</td>
                </div>
                <div className="col-md-4">
                  <td>{(this.state.person.sickHours) % 8}</td>
                </div>

              </div>
            </div>
            <div className="Data">
              <div className="row">
                <div className="col-md-4">
                  <td>Leave with out pay</td>
                </div>
                <div className="col-md-4">
                  <td>{parseInt(this.state.person.lwpHours / 8)}</td>
                </div>
                <div className="col-md-4">
                  <td>{(this.state.person.lwpHours) % 8}</td>
                </div>
              </div>
            </div>



          </div>
        </div>
        <div>


        </div>

      </div>
    );
  }
}




const mapStateToProps = state => {
  console.log('state', state)
  return {
    profile: state.statistics,
    table: state.table
  }

}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableSearchLeaveStatisticsDetails);