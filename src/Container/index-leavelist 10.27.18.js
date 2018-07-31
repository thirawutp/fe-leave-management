import React, { Component } from 'react';
import { Link } from 'react-router'
import '../App.css';
import sun from '../asset/images/sun.png';
import money from '../asset/images/money.png';
import bandage from '../asset/images/bandage.png';
import axios from 'axios';
import { connect } from 'react-redux'
import moment from 'moment';


class LeaveList extends Component {
  activeClassName(pathname) {
    if (this.props.location.pathname === pathname) {
      return ' buttonchange'
    }
    return ''
  }
  constructor(props) {
    super(props)
    const { leaveData = {} } = this.props
    this.state = {
      timeleftal: '',
      timeleftsl: '',
      timeleftlwp: '',
      timelock: '',
      lockMoment: '',
      date: moment().format('DD-MM').toString()
    };

  };
  componentDidMount() {
    let thisyear = moment().format('YYYY').toString()
    console.log(thisyear)
    axios.get(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/RemainingHour/RemainingHour?staffId=I00002`)
      .then(res => {
        console.log("data in database", res.data)
        this.setState({ timeleftal: res.data.AnnualHours })
        this.setState({ timeleftsl: res.data.SickHours })
        this.setState({ timeleftlwp: res.data.LWPHours })
      })
    if (this.state.date == '31-12') {
      this.setState({ timelock: true })
    }
    else {
      this.setState({ timelock: false })
    }
  }


  render() {
    console.log('re-render', this.state.timelock)
    return (
      <div className="leavelistbox">
        <div className='selectLeave'>
          <p>Select Leave Type</p>
        </div>
        <div className="ServerClose">
          {this.state.timelock && <p>Server was closed</p>}
        </div>
        <div className="button-popup" >
          <div className="block">
            <div className="cover-popup">
              <div className="textpopup">
                <p>Days Leave Balance</p>
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
              <div className={"text-annualleave" + this.activeClassName('/Leave')}>
                {!this.state.timelock && <Link to='/form/AnnualLeave'><button className="button">Annual Leave</button></Link>}
              </div>
            </div>

            <div className="cover-popup">
              <div className="textpopup">
                <p>Days Leave Balance</p>
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

              <div className={"text-sickleave" + this.activeClassName('/Leave')}>
                {!this.state.timelock && <Link to='/form/SickLeave'><button className="button">Sick Leave</button></Link>}
              </div>
            </div>
            <div className="cover-popup">
              <div className="textpopup">
                <p>Used Days Off</p>
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
                  <p className="text-bottom">{this.state.timeleftlwp % 8} Hours</p>
                </div>
              </div>

              <div className={"text-sickleave" + this.activeClassName('/Leave')}>
                {!this.state.timelock && <Link to='/form/LwpLeave'><button className="button">Leave with out pay</button></Link>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default LeaveList;
