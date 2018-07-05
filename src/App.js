import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import NavigationBar from '../src/components/Main/NavigationBar.js';
import Header from '../src/components/Main/Header.js';
import LeaveList from './Container/index-leavelist 10.27.18.js';
import LeaveRequestForm from './Container/index-LeaveRequestForm';

import SearchLeaveStatisticsList from '../src/components/Main/SearchLeaveStatisticsList';
import SearchApproveList from '../src/components/Main/SearchApproveList';
import alRequestForm from '../src/Container/al-leaveRequestForm';
import slRequestForm from '../src/Container/al-leaveRequestForm';
import lopRequestForm from '../src/Container/al-leaveRequestForm';
import LeaveRequestReport from '../src/components/Main/LeaveRequestReport';
import SearchHistory from '../src/components/Main/SearchHistory'
import LeaveStatisticsDetails from '../src/Container/index-LeaveStatisticsDetails'
import LeaveFormDetail from '../src/components/Main/LeaveFormDetail';
import './App.css';
import Doctors from './components/Main/Doctors.js';
import SeeApproveDetails from '../src/components/Main/SeeApproveDetails';


class MainLayout extends Component {
  render() {
    return (
      <div className='App'>
        <div>
          <Header />
        </div>
        <div>
          <NavigationBar />
        </div>
        <div className="box">

          {this.props.children}
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={MainLayout}>
          <Route path='leave' component={LeaveList} />

          <Route path='home' component={LeaveList} />
          <Route path='static' component={SearchLeaveStatisticsList} />
          <Route path='approve' component={SearchApproveList} />
          <Route path='form/:formType' component={LeaveRequestForm} />
          <Route path='form/:formType' component={LeaveRequestForm} />
          <Route path='form/:formType' component={LeaveRequestForm} />
          <Route path='leaveReport' component={LeaveRequestReport} />
          <Route path='pic' component={Doctors} />
          <Route path='staticlist' component={LeaveStatisticsDetails} />
          <Route path='aaa' component={SeeApproveDetails} />
          <Route path='form/:formType' component={alRequestForm} />
          <Route path='form/:formType' component={slRequestForm} />
          <Route path='form/:formType' component={lopRequestForm} />
          <Route path='history' component={SearchHistory} />

          <Route path='leaveDetail' component={LeaveFormDetail} />


        </Route>
      </Router>
    )
  }
}

export default App;


