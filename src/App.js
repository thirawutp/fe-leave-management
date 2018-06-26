import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Header, Sidebar } from './components/Main/'
import './App.css';

class App extends Component {
  render() {
    return [
      <Header />,
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <Sidebar />
          </nav>

          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

          </main>
        </div>
      </div>
    ]
  }
}

export default App;
