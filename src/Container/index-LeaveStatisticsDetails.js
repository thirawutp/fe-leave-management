import React, { Component } from 'react';
import '../App.css';
import TableSearchLeaveStatisticsDetails from '../components/Main/TableSearchLeaveStatisticsDetails';
import SearchLeaveStatisticsDetails from '../components/Main/SearchLeaveStatisticsDetails.js';
import { Header, Sidebar } from '../components/Main/'



class LeaveStatisticsDetails extends Component {
  render() {
    return (

      <div className="App">


        <div className='content'>
          <div className='tableheader'>

          </div>
          <div>
            <TableSearchLeaveStatisticsDetails />
            <SearchLeaveStatisticsDetails />
          </div>
        </div>

      </div>



    );
  }
}

export default LeaveStatisticsDetails;