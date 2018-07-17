import React, { Component } from 'react';

import '../../App.css';
import axios from 'axios';
import { connect } from 'react-redux'
import { addProfile } from '../../action'
class TableSearchLeaveStatisticsDetails extends Component {
  constructor(props) {

    super(props);

    this.state = {
      people: [],
      person: []
    }
  }



  componentDidMount() {

    axios.get("http://appmanleavemanagement.azurewebsites.net/api/RemainingHour/RemaingHour?staffId=00007&year=2018")
      .then(res => {
        console.log('leaveeeeee', res.data)
        this.setState({ person: res.data })
      })

  }





  render() {
    const { people } = this.props
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
                <p><b>ชื่อ : </b>{this.state.people.FirstName}</p>
              </div>
              <div className="col-md-3">
                <p><b>สกุล : </b>{this.state.people.LastName}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <p><b>StaffID : </b>{this.state.people.StaffId}</p>
              </div>
              <div className="col-md-3">
                <p><b>Section : </b>{this.state.people.Section}</p>
              </div>
              <div className="col-md-3">
                <p><b>Position : </b>{this.state.people.Position}</p>

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
                  <td>{parseInt(this.state.person.AnnualHours / 8)}</td>
                </div>
                <div className="col-md-4">
                  <td>{(this.state.person.AnnualHours) % 8}</td>
                </div>

              </div>
            </div>
            <div className="Data">
              <div className="row">
                <div className="col-md-4">
                  <td>Sick Leave</td>
                </div>
                <div className="col-md-4">
                  <td>{this.state.sickDay}</td>
                </div>
                <div className="col-md-4">
                  <td>{this.state.sickHour}</td>
                </div>

              </div>
            </div>
            <div className="Data">
              <div className="row">
                <div className="col-md-4">
                  <td>Leave with out pay</td>
                </div>
                <div className="col-md-4">
                  <td>{this.state.payDay}</td>
                </div>
                <div className="col-md-4">
                  <td>{this.state.payHour}</td>
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




const mapStateToProps = state => ({
  profile: state.statistics
})

export default TableSearchLeaveStatisticsDetails;