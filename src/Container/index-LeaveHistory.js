import React, { Component } from 'react';
import { Header, Sidebar } from './components/Main/'

import SearchLeaveStatisticsDetails from './components/Main/SearchLeaveStatisticsDetails.js';

class LeaveHistory extends Component {
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

                        <SearchLeaveStatisticsDetails />
                    </div>
                </div>

            </div>



        );
    }
}

export default LeaveHistory;