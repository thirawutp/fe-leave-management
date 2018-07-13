import React, { Component } from 'react';
import { Link } from 'react-router';


import '../../App.css';

import pic from '../../asset/images/searchh.png';

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
        leaveType: 'Sick Leave',
        staffID: '23097',
        reqDate: '20/06/2018',
        leaveDate: '03/07/2018',
        approver: '-'
    },
    {
        status: 'Approve',
        leaveID: 'LEAVE672',
        leaveType: 'Sick Leave',
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



class SearchApproveList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: people,
            term: ''

        }
        this.searchHandle = this.searchHandle.bind(this);
    }

    searchHandle(event) {
        this.setState({ term: event.target.value })
    }



    render() {

        const { term, people } = this.state;
        return (
            <div className="All">
                <div className="headtable">
            <div className="row">


            <div className="tkboth">
                <form>
                    <div className="br">
                        <input type="text" onChange={this.searchHandle} value={term} /><img src={pic} />
                    </div>
                </form>


                <div className="App">
                    <div className="STable">
                        <div className="row">
                            <div className="col-md-2">
                                <th>Status</th>
                            </div>
                            <div className="col-md-2">
                                <th>Leave ID</th>
                            </div>
                            <div className="col-md-1">
                                <th>Staff ID</th>
                            </div>
                            <div className="col-md-2">
                                <th>สร้างใบลาเมื่อ</th>
                            </div>
                            <div className="col-md-3">
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
                                <div className="SData">
                                    <div className="row ">
                                        <div className="col-md-2">
                                            <div className={` ${people.status == 'Approve' ? 'SApprove' : people.status == 'Pending' ? 'SPending' : 'SReject'}`}>
                                                <td><b>{people.status}</b></td>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div>
                                                <Link to='/leaveReport'><td><b>{people.leaveID}</b></td></Link>
                                            </div>
                                            <div>
                                                <td>    {people.leaveType}</td>
                                            </div>
                                        </div>
                                        <div className="col-md-1">
                                            <td>{people.staffID}</td>
                                        </div>
                                        <div className="col-md-2">

                                            <td>{people.reqDate}</td>

                                        </div>
                                        <div className="col-md-3">
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
        </div>

        );
    }
}




export default SearchApproveList;
// this.handleFilterItem(term)





