import React, { Component } from 'react';
import { Header, Sidebar } from './components/Main/'

import LeaveRequestReport from './components/Main/LeaveRequestReport.js';

class ApproveDetails extends Component {
  render() {
    return (

      <div className="App">
        <div>
          <Header />
        </div>
        <div className='sidebar'>
          <Sidebar />
        </div>

        <div className='content'>
          <div className='tableheader'>

          </div>
          <div>

            <LeaveRequestReport/>
          </div>
        </div>

      </div>



    );
  }
}

export default ApproveDetails;