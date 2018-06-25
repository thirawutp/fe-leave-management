import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import Header from './Header.js';
import Table from './Table_dropdown';


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
              <h2>Leave Statistics</h2>
            </div>
            <Table/>
          </div>
          
        </div>
        

    );
  }
}

export default App;
