import React, { Component } from 'react';
import { Link } from 'react-router'
import '../App.css';
import sun from '../asset/images/sun.png';
import human from '../asset/images/human.png';
import pig from '../asset/images/pig.png';
import SearchLeaveStatisticsDetails from '../components/Main/SearchLeaveStatisticsDetails'

class LeaveList extends Component {
  render() {
    return (

      <div className="container-fluid">

        <div className="App">

          <div className='content'>
            <div className='tableheader'>
              <h2>Select Leave Type</h2>
            </div>

            <div className="button-popup" >
              <div className="block">
                <div className="cover-popup">
                  <Link to='/form/annaulLeave'><div className="popup">
                    <div className="popup:hover popup2:hover">
                      <div className="picture">
                        <img src={sun} />
                      </div>

                      <div className="text-cover1 row">
                        <div className="col-md-6">
                          <p className="text-fill" >20</p>
                        </div>
                        <div className="col-md-6">
                          <p className="text-under">Days</p>
                        </div>
                      </div>
                      <div className="">
                        <p className="text-bottom">0 Hours</p>
                      </div>
                    </div>
                  </div>
                  </Link>
                  <div className="text-annualleave">
                    Annual Leave
                </div>
                </div>
                <div className="cover-popup">
                  <Link to='/form/sickLeave'><div className="popup">
                    <div className="popup:hover popup2:hover">
                      <div className="picture">
                        <img src={human} />
                      </div>

                      <div className="text-cover1 row">
                        <div className="col-md-6">
                          <p className="text-fill" >20</p>
                        </div>
                        <div className="col-md-6">
                          <p className="text-under">Days</p>
                        </div>
                      </div>
                      <div className="">
                        <p className="text-bottom">0 Hours</p>
                      </div>
                    </div>
                  </div>
                  </Link>
                  <div className="text-sickleave">
                    Sick Leave
                </div>
                </div>
                <div className="cover-popup">
                  <Link to='/form/LeaveWithOutPay'><div className="popup">
                    <div className="picture">
                      <img src={pig} />
                    </div>
                    <div className="text-cover1 row">
                      <div className="col-md-6">
                        <p className="text-fill" >20</p>
                      </div>
                      <div className="col-md-6">
                        <p className="text-under">Days</p>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-bottom">0 Hours</p>
                    </div>
                  </div>
                  </Link>
                  <div className="text-sickleave">
                    Leave with out pay
                </div>
                </div>
              </div>
            </div>


          </div>


        </div>
        <div><SearchLeaveStatisticsDetails /></div>
        {this.props.children}
      </div>


    );
  }
}

export default LeaveList;
