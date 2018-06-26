import React, { Component } from 'react';

import './App.css';



class Table_t extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'putthachart',
      surn: 'srisuwankun',
      staffID: '12345',
      section: 'Developer',
      position: 'frontend',
      annualDay: '12',
      annualHour: '2',
      sickDay: '2',
      sickHour: '3',
      payDay: '122',
      payHour: '12'

    }

  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-9">
            <div className="row">
            <div className = "gun">
              <h3><b>Leave Statistic</b></h3>
            </div>
            </div>
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

export default Table_t;


