import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import _ from 'lodash'
import NavigationBar from '../src/components/Main/NavigationBar.js';
import Header from '../src/components/Main/Header.js';
import LeaveList from './Container/index-leavelist 10.27.18.js';
import SearchLeaveStatisticsList from '../src/components/Main/SearchLeaveStatisticsList';
import SearchApproveList from '../src/components/Main/SearchApproveList';
import alRequestForm from '../src/Container/al-leaveRequestForm';
import slRequestForm from '../src/Container/sl-leaveRequestForm';
import lwpRequestForm from '../src/Container/lop-leaveRequestForm';
import LeaveRequestReport from '../src/components/Main/LeaveRequestReport';
import LeaveStatisticsDetails from '../src/Container/index-LeaveStatisticsDetails';
import LeaveFormDetail from '../src/components/Main/LeaveFormDetail';
import IndexSearchStatistics from '../src/Container/index-SearchStatistics.js';
import IndexSearchHistory from '../src/Container/index-SearchHistory.js';
import IndexSearchApprove from '../src/Container/index-SearchApprove.js';
import SetApproveLeaveForm from '../src/components/Main/SetApproveLeaveForm';
import './App.css';
import Doctors from './components/Main/Doctors.js';
import SeeApproveDetails from '../src/components/Main/SeeApproveDetails';
import LoginPage from '../src/Container/LoginPage';
import IndexindividualStatistic from '../src/Container/index-individualStatistics.js';



class MainLayout extends Component {
  render() {
    return (
      <div className='App'>
        <div>
          <Header />
        </div>

        <NavigationBar {...this.props} />

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

        <Route path='login' component={LoginPage} />
        <Route path='logout' component={LoginPage} />

        <Route path='/' component={MainLayout}>
          <Route path='leave' component={LeaveList} />
          <Route path='home' component={LeaveList} />
          <Route path='static' component={SearchLeaveStatisticsList} />
          <Route path='Approve' component={IndexSearchApprove} />
          <Route path='leaveReport' component={LeaveRequestReport} />
          <Route path='pic' component={Doctors} />
          <Route path='staticlist' component={LeaveStatisticsDetails} />
          <Route path='aaa' component={SeeApproveDetails} />
          <Route path='form/AnnualLeave' component={alRequestForm} />
          <Route path='form/SickLeave' component={slRequestForm} />
          <Route path='form/LwpLeave' component={lwpRequestForm} />
          <Route path='history' component={IndexSearchHistory} />
          <Route path='leaveDetail/:formId' component={LeaveFormDetail} />
          <Route path='SearchStatic' component={IndexSearchStatistics} />
          <Route path='setApprove' component={SetApproveLeaveForm} />
          <Route path='indexindividualStatistic' component={IndexindividualStatistic} />
        </Route>
      </Router>
    )
  }
}

export default App;


