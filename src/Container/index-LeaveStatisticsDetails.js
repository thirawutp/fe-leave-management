import React, { Component } from 'react';
import './App.css';
import TableSearchLeaveStatisticsDetails from './TableSearchLeaveStatisticsDetails.js';
import SearchLeaveStatisticsDetails from './SearchLeaveStatisticsDetails.js';
import { Header, Sidebar } from './components/Main/'



class LeaveStatisticsDetails extends Component {
  render() {
    return (

        <div className="App">
         <div>
            <Header/>
          </div>
          <div className='sidebar'>
            <Sidebar/>
          </div>

          <div className='content'>
            <div className='tableheader'>
             
            </div>
            <div>
           <TableSearchLeaveStatisticsDetails/>
           <SearchLeaveStatisticsDetails/>
           </div>
          </div>
          
        </div>
     


    );
  }
}

export default LeaveStatisticsDetails;