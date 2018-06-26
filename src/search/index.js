import React, { Component } from 'react';

import './App.css';

import Searchh from './searchh.png';

const people = [{
  No: '1',
  types : 'ลาออก',
  date : '2/12/2560',
  Status: 'pending',
  whoApprove: '-'

},{
  No: '2',
  types : 'ลาป่วย',
  date : '2/12/2560',
  Status: 'pending',
  whoApprove: '-'

},{
  No: '3',
  types : 'ลางาน',
  date : '3/12/2560',
  Status: 'approve',
  whoApprove: 'ข้าวโอ๊ต'

},{
  No: '4',
  types : 'ลาบวช',
  date : '14/12/2560',
  Status: 'approve',
  whoApprove: 'ข้าวเกรียบ'

},
{
  No: '5',
  types : 'ลาลาลา',
  date : '15/12/2560',
  Status: 'reject',
  whoApprove: 'ข้าวตู'

},{
  No: '6',
  types : 'ลาไป',
  date : '21/12/2560',
  Status: 'reject',
  whoApprove: 'ข้าวตู'

},{
  No: '7',
  types : 'ลาก่อย',
  date : '5/12/2560',
  Status: 'reject',
  whoApprove: 'ข้าวตัง'

},{
  No: '8',
  types : 'ลาล่ากีกี้',
  date : '19/12/2560',
  Status: 'pending',
  whoApprove: '-'

},{
  No: '9',
  types : 'ลาบุยบุย',
  date : '24/12/2560',
  Status: 'approve',
  whoApprove: 'ข้าวสวย'

},{
  No: '10',
  types : 'ลาออก',
  date : '28/12/2560',
  Status: 'reject',
  whoApprove: 'ข้าวกล้อง'

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
      <div className = "row">
      <div className = "col-md-3">code</div>
      <div className  = "col-md-9">
      
      
        <form>
          <input type = "text" onChange = {this.searchHandle} value = {term}/><img src={Searchh}/>
          
        </form>
        
       
            <div className="App">
              <div className = "Table">
                <div className ="row">
                    <div className="col-md-2">
                    <th>เลขที่ใบลา</th>
                    </div>
                    <div className = "col-md-2">
                      <th>ประเภทการลา</th>
                    </div>    
                    <div className = "col-md-2">
                        <th>วันที่ขอลา</th>
                    </div> 
                    <div className = "col-md-2">
                        <th>Status</th>
                    </div> 
                    <div className = "col-md-4">
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
           <div>   
           <div className = {`Data ${index % 2 === 0 ? 'Dataeven' : 'Dataodd'}`}>  
          <div className="col-md-2">
          <td><b>{people.No}</b></td>
          </div>
          <div className = "col-md-2">
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
          <div className = "col-md-4">
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




export default Search;
// this.handleFilterItem(term)





