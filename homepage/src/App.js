import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar.js';



class App extends Component {
  render() {
    return (
        <div className="App">
          <div className='sidebar'>
            <Sidebar/>
          </div>

          <div className='content'>

          </div>
        </div>
     


    );
  }
}

export default App;
