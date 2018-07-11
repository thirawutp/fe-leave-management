import React, { Component } from 'react';
import '../App.css';
import SearchStatistics from '../components/Main/SearchStatistics.js';
import SearchApprove from '../components/Main/SearchApprove.js';



class IndexSearchApprove extends Component {
    render() {
        return (

            <div className='selectleaveid'>
                <p>Select Leave ID for approve or reject leave form</p>
                <SearchApprove />



            </div>



        );
    }
}

export default IndexSearchApprove;