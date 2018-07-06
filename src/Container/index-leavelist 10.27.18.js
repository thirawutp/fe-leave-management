import React, { Component } from 'react';
import { Link } from 'react-router'
import '../App.css';
import sun from '../asset/images/sun.png';
import money from '../asset/images/money.png';
import bandage from '../asset/images/bandage.png';


class LeaveList extends Component {
  render() {
    return (

      <div className="leavelistbox">


        <div className='selectLeave'>
          <p>Select Leave Type</p>
        </div>

        <div className="button-popup" >
        
          <div className="block">
            <div className="cover-popup">
            <div className="textpopup">
            <p>วันลาคงเหลือ</p>
            </div>
              <div className="popup">              
                <div className="picture">
                  <img src={sun} />
                </div>
                <div className="object">
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
            <div className="textpopup">
            <p>วันลาคงเหลือ</p>
            </div>
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
            <div className="textpopup">
            <p>วันลาที่ใช้ไป</p>
            </div>
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







    );
  }
}

export default LeaveList;
