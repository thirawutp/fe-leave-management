import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import NavigationBar from '../src/components/Main/NavigationBar.js';
import Header from '../src/components/Main/Header.js';
import LeaveList from './Container/index-leavelist 10.27.18.js';
import SearchLeaveStatisticsList from '../src/components/Main/SearchLeaveStatisticsList';
import SearchApproveList from '../src/components/Main/SearchApproveList';
import alRequestForm from '../src/Container/al-leaveRequestForm';
import slRequestForm from '../src/Container/al-leaveRequestForm';
import lopRequestForm from '../src/Container/al-leaveRequestForm';
import LeaveRequestReport from '../src/components/Main/LeaveRequestReport';
import LeaveStatisticsDetails from '../src/Container/index-LeaveStatisticsDetails';
import LeaveFormDetail from '../src/components/Main/LeaveFormDetail';
import IndexSearchStatistics from '../src/Container/index-SearchStatistics.js';
import IndexSearchHistory from '../src/Container/index-SearchHistory.js';
import IndexSearchApprove from '../src/Container/index-SearchApprove.js';
import SetApproveLeaveForm from '../src/components/Main/SetApproveLeaveForm';
import LoginPage from '../src/Container/LoginPage';
import './App.css';
import Doctors from './components/Main/Doctors.js';
import SeeApproveDetails from '../src/components/Main/SeeApproveDetails';
import leaveForm from '../src/components/Main/LeaveFormDetail.js';

import setApprove from '../src/components/Main/SearchApprove.js';


class MainLayout extends Component {

  render() {
    const name = _.get(this.props, 'location.state.profileObj.name', '')
    return (
      <div className='App'>
        <div>
          <Header name={name} />
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
        <Route path='/login' component={LoginPage} />
        <Route path='/' component={MainLayout}>
          <Route path='leave' component={LeaveList} />

          <Route path='home' component={LeaveList} />
          <Route path='static' component={SearchLeaveStatisticsList} />

          <Route path='Approve' component={IndexSearchApprove} />
          <Route path='leaveReport' component={LeaveRequestReport} />
          <Route path='pic' component={Doctors} />
          <Route path='staticlist' component={LeaveStatisticsDetails} />
          <Route path='aaa' component={SeeApproveDetails} />
          <Route path='form/:formType' component={alRequestForm} />
          <Route path='form/:formType' component={slRequestForm} />
          <Route path='form/:formType' component={lopRequestForm} />

          <Route path='history' component={IndexSearchHistory} />

          <Route path='leaveDetail' component={LeaveFormDetail} />
          <Route path='SearchStatic' component={IndexSearchStatistics} />
          <Route path='leaveDetail' component={LeaveFormDetail} />
          <Route path='setApprove' component={SetApproveLeaveForm} />
          <Route path='leaveForm/:formId' component={LeaveFormDetail} />
          <Route path='setApprove' component={SetApproveLeaveForm} />



        </Route>
      </Router>
    )
  }
}

export default App;


