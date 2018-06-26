import React, { Component } from 'react';

import './App.css';

import Searchh from './searchh.png';

const people = [{
  No: '1',
  types : 'sick leave',
  date : '2/12/2560',
  Status: 'pending',
  whoApprove: '-'

},{
  No: '2',
  types : 'annual leave',
  date : '2/12/2560',
  Status: 'reject',
  whoApprove: 'พี่นิว'

},{
  No: '3',
  types : 'leave without pay',
  date : '3/12/2560',
  Status: 'approve',
  whoApprove: 'พี่ข้าวโอ๊ต'

}]

class Search extends Component {
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
      <div className = "row"x>
      <div className = "col-md-1"></div>
      <div className  = "col-md-9">
      
        <div className =  "tk">
        <form>
          <input type = "text" onChange = {this.searchHandle} value = {term}/><img src={Searchh}/>
          
        </form>
        </div>
        
       
            <div className="App">
              <div className = "Tables">
                <div className ="row">
                    <div className="col-md-2">
                    <th>เลขที่ใบลา</th>
                    </div>
                    <div className = "col-md-3">
                      <th>ประเภทการลา</th>
                    </div>    
                    <div className = "col-md-2">
                        <th>วันที่ขอลา</th>
                    </div> 
                    <div className = "col-md-2">
                        <th>Status</th>
                    </div> 
                    <div className = "col-md-2">
                        <th>คนอนุมัติ</th>
                    </div> 
                    </div>
                    </div>
                    </div>
      <div>
        {
          people.filter((curr) => {
            return curr.Status.toLowerCase().includes(term) 
            || curr.types.toLowerCase().includes(term) 
            || curr.date.toLowerCase().includes(term) 
            || curr.No.toLowerCase().includes(term) 
            || curr.whoApprove.toLowerCase().includes(term)
          }).map( (people,index) =>  
           
           <div className = {`Datas ${index % 2 === 0 ? 'Dataevens' : 'Dataodds'}`}>  
           <div className = "row">   
          <div className="col-md-2">
          <td><b>{people.No}</b></td>
          </div>
          <div className = "col-md-3">
          <td>{people.types}</td>
          </div>    
          <div className = "col-md-2">
              <td>{people.date}</td>
          </div> 
          <div className = "col-md-2">
          <div className =  {` ${people.Status == 'approve' ? 'approve' : people.Status == 'pending' ? 'pending':'reject'}`}>
              <td>{people.Status}</td>
          </div> 
          </div>
          <div className = "col-md-2">
              <td>{people.whoApprove}</td>
          </div>
          </div>
          </div>
          )
        }
        
      </div>
      </div>
      </div>
      
    );
  }
}




export default Search
// this.handleFilterItem(term)





