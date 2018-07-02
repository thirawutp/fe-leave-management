import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Header from '../src/components/Main/Header.js';
import Sidebar from '../src/components/Main/Sidebar.js'
import LeaveList from './Container/index-leavelist 10.27.18.js';
import LeaveRequestForm from './Container/index-LeaveRequestForm';
import SearchLeaveStatisticsDetails from './components/Main/SearchLeaveStatisticsDetails';
import SearchLeaveStatisticsList from '../src/components/Main/SearchLeaveStatisticsList';
import SearchApproveList from '../src/components/Main/SearchApproveList';
<<<<<<< HEAD
import LeaveRequestReport from '../src/components/Main/LeaveRequestReport';
import LeaveStatisticsDetails from '../src/Container/index-LeaveStatisticsDetails'
=======
import alLeaveForm from '../src/Container/al-leaveRequestForm';
import slLeaveForm from '../src/Container/al-leaveRequestForm';
import lopLeaveForm from '../src/Container/al-leaveRequestForm';

>>>>>>> cb242eb825c8a5ab827491bbc269346f93c9855a
import './App.css';
import Doctors from './components/Main/Doctors.js';
import SeeApproveDetails from '../src/components/Main/SeeApproveDetails';

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
<<<<<<< HEAD
          <Route path='form/:formType' component={LeaveRequestForm} />
          <Route path='form/:formType' component={LeaveRequestForm} />
          <Route path='form/:formType' component={LeaveRequestForm} />
          <Route path='leaveReport' component={LeaveRequestReport} />
          <Route path='pic' component={Doctors} />
          <Route path='staticlist' component={LeaveStatisticsDetails} />
          <Route path='aaa' component={SeeApproveDetails} />
=======
          <Route path='form/:formType' component={alRequestForm} />
          <Route path='form/:formType' component={slRequestForm} />
          <Route path='form/:formType' component={lopRequestForm} />
>>>>>>> cb242eb825c8a5ab827491bbc269346f93c9855a


        </Route>

      </Router>
    )
  }
}

export default App;
