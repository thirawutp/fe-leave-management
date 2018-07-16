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
import { connect } from 'react-redux'
import { addHistory } from '../../action'

const getLeaveTypePicture = leaveType => {
    if (leaveType === 'sick leave') {
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



class SearchHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            term: '',
            SetImg: ''

        }
        this.searchHandle = this.searchHandle.bind(this);
    }

    searchHandle(event) {
        this.setState({ term: event.target.value })
    }


    componentDidMount() {


    }



    render() {
        const { term } = this.state;
        const { people } = this.props
        console.log('--------people', people)
        const filtered = people.filter((curr) => {
            const test1 = curr.requestedDateTime.toLowerCase().includes(term)
            const test2 = curr.approvalStatus.toLowerCase().includes(term)
            const test3 = curr.leaveId.toString().toLowerCase().includes(term)
            const test4 = curr.type.toLowerCase().includes(term)
            const test5 = curr.staffId.toLowerCase().includes(term)
            const test6 = curr.startDateTime.toLowerCase().includes(term)
            const test7 = curr.approvedBy.toLowerCase().includes(term)
            const test8 = curr.approvalStatus.includes(term)
            const test9 = curr.type.includes(term)
            const test10 = curr.approvedBy.includes(term)
            const test11 = curr.leaveId.toString().includes(term)
            return test1 || test2 || test3 || test4 || test5 || test6 || test7 || test8 || test9 || test10 || test11
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

                                    filtered.map((people, index) =>
                                        <div>

                                            <div className="SData">
                                                <div className="row ">
                                                    <div className="col-md-2">
                                                        <div className="ooo">
                                                            <img src={getLeaveTypePicture(people.type)} height="25" width="25" /></div>
                                                        <div className={`${people.approvalStatus == 'Approved' ? 'SApprove' : people.approvalStatus == 'Pending' ? 'SPending' : 'SReject'}`}>

                                                            <td><b>{people.approvalStatus}</b></td>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div>
                                                            <Link to={`/leaveDetail/${people.rawLeaveId}`} ><td><b>{people.leaveId}</b></td></Link>
                                                        </div>
                                                        <div>

                                                            <td>{people.type}</td>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <td>{people.staffId}</td>
                                                    </div>
                                                    <div className="col-md-2">

                                                        <td>{people.requestedDateTime}</td>

                                                    </div>
                                                    <div className="col-md-2">
                                                        <td>{people.startDateTime}</td>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <td>{people.approvedBy}</td>
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

const mapStateToProps = state => ({
    people: state.history.map(row => {
        return _.reduce(row, (result, val, key) => {
            if (['requestedDateTime', 'approvedTime', 'startDateTime', 'endDateTime'].includes(key)) {
                return {
                    ...result,
                    [_.camelCase(key)]: moment(val).format('DD-MM-YYYY')
                }
            }
            return {
                ...result,
                [_.camelCase(key)]: val
            }
        }, {})
    })
})

export default connect(mapStateToProps, {})(SearchHistory)


