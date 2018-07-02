import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Header from '../src/components/Main/Header.js';
import Sidebar from '../src/components/Main/Sidebar.js'
import LeaveList from './Container/index-leavelist 10.27.18.js';
import LeaveRequestForm from './Container/index-LeaveRequestForm';
import SearchLeaveStatisticsDetails from './components/Main/SearchLeaveStatisticsDetails';
import SearchLeaveStatisticsList from '../src/components/Main/SearchLeaveStatisticsList';
import SearchApproveList from '../src/components/Main/SearchApproveList';
import alRequestForm from '../src/Container/al-leaveRequestForm';
import slRequestForm from '../src/Container/al-leaveRequestForm';
import lopRequestForm from '../src/Container/al-leaveRequestForm';

import './App.css';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Sidebar />
        </div>
        {this.props.children}
        {/* <div>
          <LeaveList />
        </div>
        <div>
          <SearchLeaveStatisticsDetails />
        </div> */}
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={MainLayout}>
          <Route path='home' component={LeaveList} />
          <Route path='static' component={SearchLeaveStatisticsList} />
          <Route path='approve' component={SearchApproveList} />
          <Route path='form/:formType' component={alRequestForm} />
          <Route path='form/:formType' component={slRequestForm} />
          <Route path='form/:formType' component={lopRequestForm} />


        </Route>

      </Router>
    )
  }
}

export default App;
