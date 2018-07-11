import React, { Component } from 'react';
import '../App.css';
import SearchHistory from '../components/Main/SearchHistory.js'



class IndexSearchHistory extends Component {
    render() {
        return (

            <div className='searchhistory'>
                <p>Leave History</p>
                <SearchHistory />



            </div>



        );
    }
}

export default IndexSearchHistory;