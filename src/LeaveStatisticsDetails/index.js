import React, { Component } from 'react';
import './App.css';
import Table_t from './table_t';
import Search from './search.js';
import { Header, Sidebar } from './components/Main/'



class LeaveStatisticsDetails extends Component {
  render() {
    return (

        <div className="App">
         <div>
            <Header/>
          </div>
          <div className='sidebar'>
            <Sidebar/>
          </div>

          <div className='content'>
            <div className='tableheader'>
             
            </div>
            <div>
           <Table_t/>
           <Search/>
           </div>
          </div>
          
        </div>
     


    );
  }
}

export default LeaveStatisticsDetails;