import React, { Component } from 'react';
import pic from './searchh.png';

import './App.css';
const people = [{
    status: "approve",
    No : "1",
    staffID : "001",
    Leave: "Sick Leave",
  start: "18/06/2018",
  end: "05/07/2018-05/07/2018"
   },
{
    status: "reject",
    No : "2",
    staffID : "002",
    Leave: "Sick Leave",
  start: "18/06/2018",
  end: "05/07/2018"
   },
{
    status: "pending",
    No : "13",
    staffID : "003",
    Leave: "Annual Leave",
  start: "18/06/2018",
  end: "05/07/2018"
   },
{
    status: "pending",
    No : "12",
    staffID : "004",
    Leave: "Annual Leave",
  start: "18/06/2018",
  end: "05/07/2018"
   },
{
    status: "pending",
    No : "1",
    staffID : "001",
    Leave: "Leave With Out Pay",
  start: "18/06/2018",
  end: "05/07/2018"
   }
]
class App extends Component {
 
    constructor(props){
        super(props);
        this.state = {
          people : people,
          term : ''
    
        }
        this.searchHandle = this.searchHandle.bind(this);
      }
    
      searchHandle(event){
        this.setState({term : event.target.value})
      }
  render() {
    const {term,people} = this.state;
    
    
    return (
      <div>
          <div className = "row">
          <div className = "col-md-2"></div>
          <div className = "col-md-11"><div>
       <div>
           <div className = "gun">
           <h3><b>Approve or Reject Leave Form</b></h3>
           </div>
           <div className = "tk">
       <form>
          <input type = "text" onChange = {this.searchHandle} value = {term}/><img src={pic}/>
          
        </form>
        </div>
        </div>

          <div className = "Table">
                <div className ="row">
                    <div className="col-md-1">
                        <th>Status</th>
                    </div>
                    <div className = "col-md-2">
                        <th>Leave ID</th>
                    </div>    
                    <div className = "col-md-2">
                        <th>Staff ID</th>
                    </div> 
                    <div className = "col-md-2">
                        <th>Leave Type</th>
                    </div> 
                    <div className = "col-md-2">
                        <th>วันที่ส่งคำขอ</th>
                    </div> 
                    <div className = "col-md-3">
                        <th>วันที่ลา</th>
                    </div> 
                   </div> 
        </div>  
        {
          people.filter((curr) => {
            return curr.status.toLowerCase().includes(term) 
            || curr.No.toLowerCase().includes(term) 
            || curr.staffID.toLowerCase().includes(term) 
            || curr.Leave.toLowerCase().includes(term) 
            || curr.start.toLowerCase().includes(term)
            || curr.end.toLowerCase().includes(term)
          }).map( (people,index) =>
             
           <div className = {`Data ${index % 2 === 0 ? 'Dataeven' : 'Dataodd'}`}>  
           <div className = "row"> 
           <div className = "col-md-1">
          <div className= {` ${people.status == 'approve' ? 'approve' : people.status == 'pending' ? 'pending':'reject'}`}>
          <td>{people.status}</td>
          </div>
          </div>
          <div className = "col-md-2">
          <td><b>{people.No}</b></td>
          </div>    
          <div className = "col-md-2">
              <td>{people.staffID}</td>
          </div> 
          <div className = "col-md-2">
              <td>{people.Leave}</td>
          </div> 
          <div className = "col-md-2">
              <td>{people.start}</td>
          </div> 
          <div className = "col-md-3">
              <td>{people.end}</td>
          </div> 
          
          </div>
          </div>
          )
        }
            
    </div></div>
          </div>
      </div>
      
    );
  }
}

export default App;