import React, { Component } from 'react';
import './App.css';

import SearchApproveList from './components/Main/search.js';
import { Header, Sidebar } from './components/Main/'



class ApproveList extends Component {
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
          <div><h3>Select Leave ID for approve or reject leave form </h3></div>
          <div>

            <SearchApproveList />
          </div>
        </div>

      </div>



    );
  }
}

export default ApproveList;