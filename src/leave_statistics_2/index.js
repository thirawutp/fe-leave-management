import React, { Component } from 'react';
import './App.css';
import Sidebar from './sidebar.js';
import Header from './header.js';
import Table_t from './table_t';
import Search from './search.js';



class App extends Component {
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

export default App;