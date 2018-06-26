import React, { Component } from 'react';
import './App.css';

import { Header, Sidebar } from './components/Main/'

class LeaveStatisticsList extends Component {
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
           
            
          </div>

          <div><Search/></div>
          
        </div>
     


    );
  }
}

export default LeaveStatisticsList;