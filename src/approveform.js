import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class approveform extends Component {
  constructor(props){
    super(props);
    this.state = {
      staffID : '12345',
      emName : 'พุทธชาด ศรีสุวรรณกุล',
      department : 'frontend',
      leaveNo : 'leave333',
      reason : 'ป่วยเป็นไข้ใจต้องการคนดูแลสักสองสามคนแงงงงงงงงงงงงงงงงงงงงงงงงง',
      dayReq : 'one day',
      date : '15/5/2560',
      time: '13:30',
      hours: '4',
      note: 'ไม่ได้เป็นหมอนะจ้ะเป็นห่วงอิ้อิ้อิ้อิ้อิ้แตงกวี๋วี่วีคนดีที่หนึ่ง',
      Doc: '',
      check : ''
    }
   
    
  }
  handleSet = () => {
    //ออกไปหน้าแรก ยังไง?
    console.log('aaa')
  } 
  handleSetTrue = () => {
      this.setState({check : true})
      console.log(this.state.check)
  } 
  handleSetFalse = () => {
    this.setState({check : false})
    console.log(this.state.check)
  } 
  render() {
    return (
    
      <div className="row">
        <div className="col-md-3"><p>code</p>
        </div>
          <div className="col-md-9">
            <h3>Aprove or Reject Leave Form </h3>
      <div className = "row">
        <div className = "col-md-4">
         <p>Date :</p>
       </div>
      <div className = "col-md-7">
        <p>Staff ID : {this.state.staffID}</p>
      </div>
      
      </div>
      <div className = "Table">
      <div className = "row">
      <div className = "col-md-2">
      <th>Name : </th>
      </div>
      <div className = "col-md-4"><p>{this.state.emName}</p></div>
      <div className = "col-md-2">
      <th>Department : </th>
      </div>
      <div className = "col-md-2">
      <p>{this.state.department}</p>
      </div>
      </div>
      </div>
      <div className = "Data">
      <div className = "row">
      <div className = "col-md-2">
      <th>Leave No :</th>
      </div>
      <div className = "col-md-1">
      <p>{this.state.leaveNo}</p>
      </div>
      </div>
      <div className = "row">
      <div className = "col-md-4">
      <th>Reason for requested leave :</th>
      </div>
      <div className = "col-md-8">
      <p>{this.state.reason}</p>
      </div>
      </div>
      <div className = "row">
      <div className = "col-md-3">
      <th>Day Requested:</th>
      </div>
      <div className = "col-md-3">
      <p>{this.state.dayReq}</p>
      </div>
      </div>
      <div className = "row">
        <div className = "col-md-1">
         <th>Date:</th>
       </div>
       <div className = "col-md-2">
         <p>{this.state.date}</p>
       </div>
      <div className = "col-md-1">
        <th>Time:</th>
      </div>
      <div className = "col-md-2">
      <p>{this.state.time}</p>
      </div>
      <div className = "col-md-1">
        <th>Time:</th>
      </div>
      <div className = "col-md-2">
      <p>{this.state.hours} hours</p>
      </div>
    </div>
      <div className = "row">
      <div className = "col-md-2">
      <th>Note/Comment:</th>
      </div>
      <div className = "col-md-8">
      <p>{this.state.note}</p>
      </div>
      </div>
      <div className = "row">
      <div className = "col-md-4">
      <th>Document:</th>
      </div>
      </div>
      <div className = "row">
        <div className = "col-md-4">
         <button value = "Approve" onClick = {this.handleSetTrue}>Approve</button>
       </div>
      <div className = "col-md-4">
        <button value = "Reject" onClick = {this.handleSetFalse}>Reject</button>
      </div>
      <div className = "col-md-4">
        <button value = "Cancel" onClick = {this.handleSet} >Cancel</button>
      </div>

      </div>

      </div>
         </div>
    </div>
    
    );
  }
}

export default approveform;
