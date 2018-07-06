import React, { Component } from 'react';
import '../App.css';
import SearchStatistics from '../components/Main/SearchStatistics.js';
import SearchApprove from '../components/Main/SearchApprove.js';



class IndexSearchApprove extends Component {
    render() {
        return (

            <div>
                <h5>Select Leave ID for approve or reject leave form</h5>
                <SearchApprove />



            </div>



        );
    }
}

export default IndexSearchApprove;