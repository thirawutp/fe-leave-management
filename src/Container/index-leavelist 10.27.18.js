import React, { Component } from 'react';
import { Link } from 'react-router'
import '../App.css';
import sun from '../asset/images/sun.png';
import human from '../asset/images/human.png';
import pig from '../asset/images/pig.png';
import money from '../asset/images/money.png';
import bandage from '../asset/images/bandage.png';
import SearchLeaveStatisticsDetails from '../components/Main/SearchLeaveStatisticsDetails'

class LeaveList extends Component {
  render() {
    return (

      <div className="">

        <div className="App">

          <div className='content'>
            <div className='tableheader'>
              <h2>Select Leave Type</h2>
            </div>

            <div className="button-popup" >
              <div className="block">
                <div className="cover-popup">
                  <div className="popup">
                    <div className="">
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
                  <div className="text-annualleave">
                    <Link to='/form/annaulLeave'><button className="button"> Annual Leave</button>  </Link>
                  </div>
                </div>
                <div className="cover-popup">
                  <div className="popup">
                    <div className="">
                      <div className="picture">
                        <img src={bandage} />
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

                  <div className="text-sickleave">
                    <Link to='/form/sickLeave'><button className="button">Sick Leave</button></Link>
                  </div>
                </div>
                <div className="cover-popup">
                  <div className="popup">
                    <div className="picture">
                      <img src={money} />
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

                  <div className="text-sickleave">
                    <Link to='/form/LeaveWithOutPay'><button className="button">Leave with out pay</button></Link>
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
