import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import '../../App.css';
import axios from 'axios';
import { connect } from 'react-redux'
import { addTable } from '../../action'
import leftarrow from '../../asset/images/left-arrow.png';
import { Link } from 'react-router';

class TableSearchLeaveStatisticsDetails extends Component {
  constructor(props) {
    super(props);

    const staffId = _.last(window.location.pathname.split('/'))

    const person = _.find(props.table, item => item.staffId === staffId)
    const personProfile = _.find(props.profile, item => item.staffId === staffId)

    this.state = {
      person,
      personProfile,
      people: [],
      quota: '100',

    }
  }



  componentDidMount() {
    axios.get("https://appmanleavemanagement20180718055046.azurewebsites.net/api/RemainingHour/RemainingHours", {
      headers: {
        Authorization: 'Bearer 123456'
      }
    }) //TableSearchLeaveStatisticsDetails
      .then(res => {
        console.log('sdvbdf drgfbdrgfbdrgf', res.data)
        const data = res.data.map(p => {
          return _.reduce(p, (result, val, key) => {

            return {
              ...result,
              [_.camelCase(key)]: val
            }
          }, {})
        })

        this.props.addTable(data)
      })



  }


  getBalance = (quota, hour) => {
    return parseInt(quota - hour)

  }



  render() {
    const { people } = this.props
    const { personProfile, person } = this.state
    console.log('people'), people
    console.log("DDDDD", person)
    return (
      <div>

        <div className='nbbutton'>
          <div className='backbutton'>
            <Link to='/SearchStatic'><button className="back-button"><img src={leftarrow} />Back</button></Link>
          </div>
          <div className="row rowback">
            <div className="gun">
              <p><b>Leave Statistic</b></p>
            </div>
          </div>
          <div className='tktabledetails'>
            {personProfile &&
              <Fragment>
                <div className="row">
                  <div className="col-md-3">
                    {console.log('personProfile-->', personProfile)}
                    <p><b>Name : </b>{personProfile.firstNameEn}</p>
                  </div>
                  <div className="col-md-3">
                    <p><b>Surname : </b>{personProfile.lastNameEn}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <p><b>StaffID : </b>{personProfile.staffId}</p>
                  </div>
                  <div className="col-md-3">
                    <p><b>Section : </b>{personProfile.department}</p>
                  </div>
                  <div className="col-md-3">
                    <p><b>Position : </b>{personProfile.position}</p>
                  </div>
                </div>
              </Fragment>
            }
          </div>
          <div className="tkboth">
            <div className="Table">
              <div className="row">
                <div className="col-md-3 dateused">
                  <th>Type</th>
                </div>
                <div className="col-md-3 daysused">
                  <th>Quota</th>
                </div>
                <div className="col-md-3 hoursused">
                  <th>Leave days used</th>
                </div>
                <div className="col-md-3 dateused1">
                  <th>Leave days balance</th>
                </div>
              </div>

            </div>
            {person &&
              <Fragment>
                <div className="Data">
                  <div className="row">
                    <div className="col-md-3 topic">
                      <td>Sick Leave</td>
                    </div>
                    <div className="col-md-3 daytopic">
                      <td>{parseInt(person.totalSickHours / 8)} Days {(person.totalSickHours % 8)} Hrs.</td>
                    </div>
                    <div className="col-md-3 hourstopic">

                      <td>{parseInt(this.getBalance(person.totalSickHours, person.sickHours) / 8)} Days {parseInt(this.getBalance(person.totalSickHours, person.sickHours) % 8)} Hrs.</td>
                    </div>
                    <div className="col-md-3 hourstopic">
                      <td>{parseInt(person.sickHours / 8)} Days {parseInt(person.sickHours % 8)} Hrs.</td>
                    </div>
                  </div>
                </div>
                <div className="Data">
                  <div className="row">
                    <div className="col-md-3 topic">
                      <td>Annual Leave</td>
                    </div>
                    <div className="col-md-3 daytopic">
                      <td>{parseInt(person.totalAnnualHours / 8)} Days {(person.totalAnnualHours % 8)} Hrs.</td>
                    </div>
                    <div className="col-md-3 hourstopic">
                      <td>{parseInt(this.getBalance(person.totalAnnualHours, person.annualHours) / 8)} Days {parseInt(this.getBalance(person.totalAnnualHours, person.annualHours) % 8)} Hrs.</td>
                    </div>
                    <div className="col-md-3 hourstopic">
                      <td>{parseInt(person.annualHours / 8)} Days {parseInt(person.annualHours % 8)} Hrs.</td>
                    </div>
                  </div>
                </div>
                <div className="Data">
                  <div className="row">
                    <div className="col-md-3 topic">
                      <td>Leave without pay</td>
                    </div>
                    <div className="col-md-3 daytopic">
                      <td>-</td>
                    </div>
                    <div className="col-md-3 hourstopic">
                      <td>{parseInt(person.lwpHours / 8)} Days {parseInt(person.lwpHours % 8)} Hrs.</td>
                    </div>
                    <div className="col-md-3 hourstopic">
                      <td>-</td>
                    </div>
                  </div>
                </div>
              </Fragment>
            }
          </div>
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

const mapDispatchToProps = dispatch => ({
  addTable: (table) => dispatch(addTable(table))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableSearchLeaveStatisticsDetails)
