import React, { Component } from 'react';
import './App.css';

import Search from './search.js';
import { Header, Sidebar } from './components/Main/'



class Set_approve_1 extends Component {
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
           
           <Search/>
           </div>
          </div>
          
        </div>
     


    );
  }
}

export default Set_approve_1;