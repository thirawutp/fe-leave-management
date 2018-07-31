import React, { Component } from 'react';
import '../../App.css';
import SickLeave from '../../asset/images/SickLeave.png';
import AnnualLeave from '../../asset/images/AnnualLeave.png';
import LeaveWithOutPay from '../../asset/images/LeaveWithOutPay.png';
import pic from '../../asset/images/searchh.png';
import { Link } from "react-router";
import axios from 'axios';
import _ from 'lodash'
import moment from 'moment'


const getLeaveTypePicture = leaveType => {
    if (leaveType === 'Sick Leave') {
        return SickLeave
    }
    if (leaveType === 'Annual Leave') {
        return AnnualLeave
    }
    if (leaveType === 'Leave without Pay') {
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




class SearchTable extends Component {
    constructor(props) {
        super(props);


        this.state = {
            people: [],
            term: '',
            SetImg: '',

        }
        this.searchHandle = this.searchHandle.bind(this);
    }
    searchHandle(event) {
        this.setState({ term: event.target.value })
    }


    componentDidMount() {
        const staffId = _.last(window.location.pathname.split('/'))
        axios.get(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/History/History?staffId=${staffId}`)
            .then(res => {
                this.setState({ people: res.data });
                console.log("8888888", this.state.people)
            })
    }




    render() {
        const { term } = this.state;
        console.log("RRRRRR", this.state.people)

        console.log('--------people', this.state.people)
        const filtered = people.filter((curr) => {
            const test1 = curr.RequestedDateTime.toLowerCase().includes(term)
            const test2 = curr.ApprovalStatus.toLowerCase().includes(term)
            const test3 = curr.LeaveId.toString().toLowerCase().includes(term)
            const test4 = curr.Type.toLowerCase().includes(term)
            const test5 = curr.StaffId.toLowerCase().includes(term)
            const test6 = curr.StartDateTime.toLowerCase().includes(term)
            const test7 = curr.ApprovedBy.toLowerCase().includes(term)
            const test8 = curr.ApprovalStatus.includes(term)
            const test9 = curr.Type.includes(term)
            const test10 = curr.ApprovedBy.includes(term)
            const test11 = curr.LeaveId.toString().includes(term)
            const test12 = curr.RequestedDateTime.toUpperCase().includes(term)
            const test13 = curr.ApprovalStatus.toUpperCase().includes(term)
            const test14 = curr.LeaveId.toString().toUpperCase().includes(term)
            const test15 = curr.Type.toUpperCase().includes(term)
            const test16 = curr.StaffId.toUpperCase().includes(term)
            const test17 = curr.StartDateTime.toUpperCase().includes(term)
            const test18 = curr.ApprovedBy.toUpperCase().includes(term)
            return test1 || test2 || test3 || test4 || test5 || test6 || test7 || test8 || test9 || test10 || test11 || test12 || test13 || test14 || test15 || test16 || test17 || test18
        })
        return (
            <div className="All">
                <div className="headtable">
                    <div className="row ">


                        <div className='tkboth'>
                            <form>
                                <div className="bbr">
                                    <input type="text" placeholder="   Search ..." onChange={this.searchHandle} value={term} /> <img src={pic} width="19" height="19" />
                                </div>
                            </form>




                            <div className='TangKwatable'>
                                <div className="STable">
                                    <div className="row">
                                        <div className="col-md-2 Shtable">
                                            <th>Status</th>
                                        </div>
                                        <div className="col-md-2 Shtable">
                                            <th>Leave ID</th>
                                        </div>
                                        <div className="col-md-2 Shtable">
                                            <th>Staff ID</th>
                                        </div>
                                        <div className="col-md-2 Shtable">
                                            <th>สร้างใบลาเมื่อ</th>
                                        </div>
                                        <div className="col-md-2 Shtable">
                                            <th>Leaving Date</th>
                                        </div>
                                        <div className="col-md-2 Shtable">
                                            <th>Manage by</th>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                {

                                    filtered.map((people, index) =>
                                        <div>

                                            <div className="SData">
                                                <div className="row ">
                                                    <div className="col-md-2">
                                                        <div className="ooo">
                                                            <img src={getLeaveTypePicture(people.Type)} height="25" width="25" /></div>
                                                        <div className={`${people.ApprovalStatus == 'Approved' ? 'SApprove' : people.ApprovalStatus == 'Pending' ? 'SPending' : 'SReject'}`}>

                                                            <td><b>{people.ApprovalStatus}</b></td>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div>
                                                            <Link to={`/leaveDetail/${people.RawLeaveId}`} ><td><b>{people.LeaveId}</b></td></Link>
                                                        </div>
                                                        <div>

                                                            <td>{people.Type}</td>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <td>{people.StaffId}</td>
                                                    </div>
                                                    <div className="col-md-2">

                                                        <td>{people.RequestedDateTime}</td>

                                                    </div>
                                                    <div className="col-md-2">
                                                        <td>{people.StartDateTime}</td>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <td>{people.ApprovedBy}</td>
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
            </div>

        );
    }
}




export default SearchTable



