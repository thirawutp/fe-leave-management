import React, { Component } from 'react';
import '../App.css';
import SearchStatistics from '../components/Main/SearchStatistics.js'



class IndexSearchStatistics extends Component {
    render() {
        return (

            <div className="selectstaff">
                <p>Select Staff ID</p>
                <SearchStatistics />



            </div>



        );
    }
}

export default IndexSearchStatistics;