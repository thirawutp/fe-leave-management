import React, { Component } from 'react';
import '../../App.css';
import SickLeave from '../../asset/images/SickLeave.png';
import AnnualLeave from '../../asset/images/AnnualLeave.png';
import LeaveWithOutPay from '../../asset/images/LeaveWithOutPay.png';
import pic from '../../asset/images/searchh.png';
import { Link } from "react-router";
import axios from 'axios';

const getLeaveTypePicture = leaveType => {
    if (leaveType === 'Sick Leave') {
        return SickLeave
    }
    if (leaveType === 'Annual Leave') {
        return AnnualLeave
    }
    if (leaveType === 'Leave with out pay') {
        return LeaveWithOutPay
    }
    return ''
}

const people = [
    {
        status: 'Pending',
        leaveID: 'LEAVE672',

        leaveType: 'Sick Leave',
        staffID: '23097',
        reqDate: '20/06/2018',
        leaveDate: '01/07/2018-03/07/2018',
        approver: '-'
    },
    {
        status: 'Pending',
        leaveID: 'LEAVE672',
        leaveType: 'Annual Leave',
        staffID: '23097',
        reqDate: '20/06/2018',
        leaveDate: '03/07/2018',
        approver: '-'
    },
    {
        status: 'Approve',
        leaveID: 'LEAVE672',
        leaveType: 'Leave with out pay',
        staffID: '23097',
        reqDate: '20/06/2018',
        leaveDate: '01/07/2018-03/07/2018',
        approver: 'ข้าวโอ๊ต'
    },
    {
        status: 'Approve',
        leaveID: 'LEAVE672',
        leaveType: 'Sick Leave',
        staffID: '23097',
        reqDate: '20/06/2018',
        leaveDate: '01/07/2018-03/07/2018',
        approver: 'พี่นิว'
    },
    {
        status: 'Reject',
        leaveID: 'LEAVE672',
        leaveType: 'Sick Leave',
        staffID: '23097',
        reqDate: '20/06/2018',
        leaveDate: '01/07/2018-03/07/2018',
        approver: 'พี่เก่ง'
    },
]



class SearchHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: people,
            term: '',
            SetImg: ''

        }
        this.searchHandle = this.searchHandle.bind(this);
    }

    searchHandle(event) {
        this.setState({ term: event.target.value })
    }
    SetPic() {
        if (people.leaveType == 'Annual Leave') {
            this.setState({ SetImg: AnnualLeave })
        }
        else if (people.leaveType == 'Sick Leave') {
            this.setState({ SetImg: SickLeave })
        }
        if (people.leaveType == 'Leave with out pay') {
            this.setState({ SetImg: LeaveWithOutPay })
        }
    }

    componentDidMount() {
        axios.get(`http://appmanleavemanagement.azurewebsites.net/api/History/History?staffId=00002`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }



    render() {

        const { term, people } = this.state;
        return (
            <div className="All">
                <div className="headtable">
                    <div className="row ">



                        <form>
                            <div className="bbr">
                                <input type="text" onChange={this.searchHandle} value={term} /> <img src={pic} width="19" height="19" />
                            </div>
                        </form>


                        <div>
                            <div className="STable">
                                <div className="row">
                                    <div className="col-md-2">
                                        <th>Status</th>
                                    </div>
                                    <div className="col-md-2">
                                        <th>Leave ID</th>
                                    </div>
                                    <div className="col-md-2">
                                        <th>Staff ID</th>
                                    </div>
                                    <div className="col-md-2">
                                        <th>สร้างใบลาเมื่อ</th>
                                    </div>
                                    <div className="col-md-2">
                                        <th>Leaving Date</th>
                                    </div>
                                    <div className="col-md-2">
                                        <th>Manage by</th>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                people.filter((curr) => {
                                    return curr.status.toLowerCase().includes(term)
                                        || curr.leaveID.toLowerCase().includes(term)
                                        || curr.leaveType.toLowerCase().includes(term)
                                        || curr.staffID.toLowerCase().includes(term)
                                        || curr.reqDate.toLowerCase().includes(term)
                                        || curr.leaveDate.toLowerCase().includes(term)
                                        || curr.approver.toLowerCase().includes(term)
                                }).map((people, index) =>
                                    <div>
                                        {console.log(people)}
                                        <div className="SData">
                                            <div className="row ">
                                                <div className="col-md-2">
                                                    <div className="ooo">


                                                        <img src={getLeaveTypePicture(people.leaveType)} height="25" width="25" /></div>
                                                    <div className={` ${people.status == 'Approve' ? 'SApprove' : people.status == 'Pending' ? 'SPending' : 'SReject'}`}>

                                                        <td><b>{people.status}</b></td>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div>
                                                        <Link to="/leaveDetail"> <td><b>{people.leaveID}</b></td></Link>
                                                    </div>
                                                    <div>

                                                        <td>{people.leaveType}</td>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <td>{people.staffID}</td>
                                                </div>
                                                <div className="col-md-2">

                                                    <td>{people.reqDate}</td>

                                                </div>
                                                <div className="col-md-2">
                                                    <td>{people.leaveDate}</td>
                                                </div>
                                                <div className="col-md-2">
                                                    <td>{people.approver}</td>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }


                        </div>

                    </div>
                </div>
            </div>

        );
    }
}




export default SearchHistory;
// this.handleFilterItem(term)





