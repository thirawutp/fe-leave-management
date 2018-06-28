import React, { Component } from 'react';

class LeaveRequestReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffID: '12345',
      name: 'พุทธชาด',
      surn: 'ศรีสุวรรณกุล',
      section: 'BA',
      position: 'frontend',
      leaveNo: 'leave333',
      createDateForm: '26/06/2560',
      reason: 'ป่วยเป็นไข้ใจต้องการคนดูแลสักสองสามคนแงงงงงงงงงงงงงงงงงงงงงงงงง',
      dayReq: 'one day',
      date: '15/5/2560',
      time: '13:30',
      hours: '4',
      note: 'ไม่ได้เป็นหมอนะจ้ะเป็นห่วงอิ้อิ้อิ้อิ้อิ้แตงกวี๋วี่วีคนดีที่หนึ่ง',
      Doc: '',
      check: '',
      leaveType: 'Sick Leave'
    }


  }
  handleSet = () => {
    //ออกไปหน้าแรก ยังไง?
    console.log('aaa')
  }
  handleSetTrue = () => {
    // this.setState({check : true})
    window.confirm("แน่ใจว่าจะ Approve?")

    console.log(this.state.check)
  }
  handleSetFalse = () => {
    // this.setState({check : false})
    window.confirm("แน่ใจว่าจะ Reject?")
    console.log(this.state.check)
  }
  render() {
    return (
      <div>
        <div className="row Dory">
          <div className="col-md-2"></div>

          <div className="col-md-8">

            <div className="row">
              <div className="col-md-2">
                <h4>Leave Static</h4>
              </div>

            </div>
            <div className="row Dory">
              <div className="col-md-2">
                <th><b>Name : </b></th>
              </div>
              <div className="col-md-2">
                <td>{this.state.name}</td>
              </div>
              <div className="col-md-2">
                <th><b>Surnname : </b></th>
              </div>
              <div className="col-md-2">
                <td>{this.state.surn}</td>
              </div>

            </div>
            <div className="row Dory">
              <div className="col-md-2">
                <th><b>Staff ID : </b></th>
              </div>
              <div className="col-md-2">
                <td>{this.state.staffID}</td>
              </div>
              <div className="col-md-2">
                <th><b>Section : </b></th>
              </div>
              <div className="col-md-2">
                <td>{this.state.section}</td>
              </div>
              <div className="col-md-2">
                <th><b>Position : </b></th>
              </div>
              <div className="col-md-2">
                <td>{this.state.position}</td>
              </div>
            </div>
            <div className="shark Dory"></div>

            <div className="row Dory">
              <div className="col-md-12">
                <td>สร้างใบลาเมื่อ : {this.state.createDateForm}</td>
              </div>


            </div>

            <div className="row Dory">
              <div className="col-md-2">
                <th><b>Day Requested: </b></th>
              </div>
              <div className="col-md-2">
                <td>{this.state.dayReq}</td>
              </div>
              <div className="col-md-2">
                <th><b>Leave Type: </b></th>
              </div>
              <div className="col-md-2">
                <td>{this.state.leaveType}</td>
              </div>

            </div>
            <div className="row Dory">
              <div className="col-md-2">
                <th><b>Date: </b></th>
              </div>
              <div className="col-md-2">
                <td>{this.state.date}</td>
              </div>
              <div className="col-md-2">
                <th><b>Time : </b></th>
              </div>
              <div className="col-md-2">
                <td>{this.state.time}</td>
              </div>
              <div className="col-md-2">
                <th><b>Time : </b></th>
              </div>
              <div className="col-md-2">
                <td>{this.state.hours} Hrs.</td>
              </div>


            </div>
            <div className="row Dory">
              <div className="col-md-12">
                <th><b>Note/comment:{this.state.note} </b></th>
              </div>



            </div>
            <div className="row Dory">
              <div className="col-md-12">
                <th><b>File: </b></th>
              </div>



            </div>

            <div className="row">
              <div className="col-md-4">
                <button value="Approve" onClick={this.handleSetTrue}>Approve</button>
              </div>
              <div className="col-md-4">
                <button value="Reject" onClick={this.handleSetFalse}>Reject</button>
              </div>
              <div className="col-md-4">
                <button value="Cancel" onClick={this.handleSet} >Cancel</button>
              </div>

            </div>




          </div>
          <div className="col-md-2"></div>
        </div>

      </div>
    );
  }
}

export default LeaveRequestReport;
