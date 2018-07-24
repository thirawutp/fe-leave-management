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
import { addApprove } from '../../action'

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








class SearchApprove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            term: '',
            SetImg: '',
            count: 0


        }
        this.searchHandle = this.searchHandle.bind(this);
    }

    searchHandle(event) {
        this.setState({ term: event.target.value })
    }

    countStatus = status => {
        console.log("asasasadsadsa")


    }



    componentDidMount() {
        axios.get('https://appmanleavemanagement20180718055046.azurewebsites.net/api/History/Leaves') //searchApprove
            .then(res => {
                const data = res.data.map(p => {
                    return _.reduce(p, (result, val, key) => {
                        if (key === 'ApprovedBy') {
                            return {
                                ...result,
                                [_.camelCase(key)]: val || '-'
                            }
                        }
                        if (key === 'LeaveId') {
                            return {
                                ...result,
                                rawLeaveId: val,
                                [_.camelCase(key)]: `LEA${_.padStart(val, 5, '0')}`
                            }
                        }

                        return {
                            ...result,
                            [_.camelCase(key)]: val
                        }
                    }, {})
                })
                this.props.addApprove(data)
            })
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
            const test12 = curr.requestedDateTime.toUpperCase().includes(term)
            const test13 = curr.approvalStatus.toUpperCase().includes(term)
            const test14 = curr.leaveId.toString().toUpperCase().includes(term)
            const test15 = curr.type.toUpperCase().includes(term)
            const test16 = curr.staffId.toUpperCase().includes(term)
            const test17 = curr.startDateTime.toUpperCase().includes(term)
            const test18 = curr.approvedBy.toUpperCase().includes(term)
            return test1 || test2 || test3 || test4 || test5 || test6 || test7 || test8 || test9 || test10 || test11 || test12 || test13 || test14 || test15 || test16 || test17 || test18
        })
        return (
            <div className="All">
                <div className="headtable">
                    <div className="row ">


                        <div className='tkboth'>
                            <form>
                                <div className="bbr">
                                    <input type="text" placeholder="   Search by..." onChange={this.searchHandle} value={term} /> <img src={pic} width="19" height="19" />
                                </div>
                            </form>




                            <div className='TangKwatable'>
                                <div className="STable">
                                    <div className="row">
                                        <div className="col-md-2 tktopic">
                                            <th>Status</th>
                                        </div>
                                        <div className="col-md-2 tktopic1">
                                            <th>Leave ID</th>
                                        </div>
                                        <div className="col-md-2 tktopic2">
                                            <th>Staff ID</th>
                                        </div>
                                        <div className="col-md-2 tktopic3">
                                            <th>สร้างใบลาเมื่อ</th>
                                        </div>
                                        <div className="col-md-2 tktopic4">
                                            <th>Leaving Date</th>
                                        </div>
                                        <div className="col-md-2 tktopic5">
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
                                                    <div className="col-md-2 tktkleave">
                                                        <div>
                                                            <Link to={`/setApprove/${people.rawLeaveId}`} ><td><b>{people.leaveId}</b></td></Link>
                                                        </div>
                                                        <div>

                                                            <td>{people.type}</td>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 tkstaffid">
                                                        <td>{people.staffId}</td>
                                                    </div>
                                                    <div className="col-md-2 tkrequest">

                                                        <td>{people.requestedDateTime}</td>

                                                    </div>
                                                    <div className="col-md-2 tkstartdate">
                                                        <td>{people.startDateTime}</td>
                                                    </div>
                                                    <div className="col-md-2 tkapprove">
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

const mapStateToProps = state => {
    console.log(state)
    return {

        people: _.get(state, 'approve', []).map(row => {
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
    }
}

const mapDispatchToProps = dispatch => ({
    addApprove: (approve) => dispatch(addApprove(approve))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchApprove)


