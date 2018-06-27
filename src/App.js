import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Header, Sidebar } from './components/Main/'
import LeaveRequestForm from './LeaveRequestForm/index-LeaveRequestForm'
import './App.css';

class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2">
              <Sidebar />
            </nav>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              {this.props.children}
            </main>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={MainLayout}>
          <IndexRoute component={LeaveRequestForm} />
        </Route>
      </Router>
    )
  }
}

export default App;
