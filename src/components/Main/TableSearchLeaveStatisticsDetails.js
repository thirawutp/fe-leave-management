import React, { Component } from 'react';

import '../../App.css';



class TableSearchLeaveStatisticsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []

    }

  }


  render() {
    return (
      <div className="">
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
                <p><b>ชื่อ : </b>{this.state.name}</p>
              </div>
              <div className="col-md-3">
                <p><b>สกุล : </b>{this.state.surn}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <p><b>StaffID : </b>{this.state.staffID}</p>
              </div>
              <div className="col-md-3">
                <p><b>Section : </b>{this.state.section}</p>
              </div>
              <div className="col-md-3">
                <p><b>Position : </b>{this.state.position}</p>
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
                  <td>{this.state.annualDay}</td>
                </div>
                <div className="col-md-4">
                  <td>{this.state.annualHour}</td>
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

export default TableSearchLeaveStatisticsDetails;


