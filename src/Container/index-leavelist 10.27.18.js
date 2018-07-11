import React, { Component } from 'react';
import { Link } from 'react-router'
import '../App.css';
import sun from '../asset/images/sun.png';
import money from '../asset/images/money.png';
import bandage from '../asset/images/bandage.png';
import axios from 'axios';



class LeaveList extends Component {
  state = {
    timeleftal: 0, timeleftsl: 0, timeleftlwp: 0

  };
  componentDidMount() {
    axios.get("http://appmanleavemanagement.azurewebsites.net/api/RemainingHour/RemaingHour?staffId=00005&year=2018")
      .then(res => {
        this.setState({ timeleftal: res.data.AnnualHours })
        this.setState({ timeleftsl: res.data.SickHours })
        this.setState({ timeleftlwp: res.data.LWPHours })
        console.log(res)
      })
  }
  render() {
    console.log(this.props)
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
                      <p className="text-fill" >{parseInt(this.state.timeleftal / 8)}</p>
                    </div>
                    <div className="col-md-6">
                      <p className="text-under">Days</p>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-bottom">{this.state.timeleftal % 8} Hours</p>
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
                      <p className="text-fill" >{parseInt(this.state.timeleftsl / 8)}</p>
                    </div>
                    <div className="col-md-6">
                      <p className="text-under">Days</p>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-bottom">{this.state.timeleftsl % 8} Hours</p>
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
                    <p className="text-fill" >{parseInt(this.state.timeleftlwp / 8)}</p>
                  </div>
                  <div className="col-md-6">
                    <p className="text-under">Days</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-bottom">{this.state.timeleftlwp % 8}Hours</p>
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
