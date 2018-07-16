import React, { Component } from 'react';
import '../App.css';
import SearchHistory from '../components/Main/SearchHistory.js'
import TableSearchLeaveStatisticsDetails from '../components/Main/TableSearchLeaveStatisticsDetails'




class IndexIndividualStatistics extends Component {
    render() {
        return (

            <div>

                <TableSearchLeaveStatisticsDetails />
                <SearchHistory />



            </div>



        );
    }
}

export default IndexIndividualStatistics;