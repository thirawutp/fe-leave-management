import React, { Component } from 'react';
import '../App.css';
import SearchTable from '../components/Main/SearchTable.js'
import TableSearchLeaveStatisticsDetails from '../components/Main/TableSearchLeaveStatisticsDetails'




class IndexIndividualStatistics extends Component {
    render() {
        return (
            <div className='staticticbox'>
                <TableSearchLeaveStatisticsDetails />
                {/* <SearchTable /> */}
            </div>



        );
    }
}

export default IndexIndividualStatistics;