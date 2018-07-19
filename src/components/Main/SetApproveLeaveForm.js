import React, { Component } from 'react';
import pic from '../../asset/images/Doctorr.jpg';
import axios from 'axios';
import _ from 'lodash'
import moment from 'moment'
import { connect } from 'react-redux'
import { searchInTable } from '../../action'

class SetApproveLeaveForm extends Component {
    constructor(props) {
        super(props);
        const LeaveId = parseInt(_.last(window.location.pathname.split('/')))


        const personProfile = _.find(props.profile, item => item.rawLeaveId === LeaveId)
        console.log('TANGKAAAA', personProfile, props.profile, LeaveId)
        this.state = {
            person: [],
            personProfile
        }


    }
    handleSet = () => {
        //ออกไปหน้าแรก ยังไง?
        console.log('aaa')
    }
    handleSetTrue = () => {
        // this.setState({check : true})
        window.confirm("แน่ใจว่าจะ Approve?")

        console.log(this.state.check)
    }
    handleSetFalse = () => {
        // this.setState({check : false})
        window.confirm("แน่ใจว่าจะ Reject?")
        console.log(this.state.check)
    }
    getDayType = (start, end) => {

        if (moment(start).isSame(end, 'days')) {
            return true
        }
        else {
            return
        }

    }



    componentDidMount() {


    }
    render() {
        return (
            <div>
                <div className="Dory">

                    <div className="row">
                        <div className="col-md-3">
                            <h4>Leave Static</h4>
                        </div>

                    </div>
                    <div className="bird">
                        <div className="row Dory">
                            <div className="col-md-2">
                                <th><b>Name : </b></th>
                            </div>
                            <div className="col-md-2">
                                <td>{this.state.firstName}</td>
                            </div>
                            <div className="col-md-2">
                                <th><b>Surnname : </b></th>
                            </div>
                            <div className="col-md-2">
                                <td>{this.state.surn}</td>
                            </div>

                        </div>
                        <div className="row Dory">
                            <div className="col-md-2">
                                <th><b>Staff ID : </b></th>
                            </div>
                            <div className="col-md-2">
                                <td>{this.state.staffID}</td>
                            </div>
                            <div className="col-md-2">
                                <th><b>Section : </b></th>
                            </div>
                            <div className="col-md-2">
                                <td>{this.state.section}</td>
                            </div>
                            <div className="col-md-2">
                                <th><b>Position : </b></th>
                            </div>
                            <div className="col-md-2">
                                <td>{this.state.position}</td>
                            </div>
                        </div>
                    </div>
                    <div className="shark Dory"></div>


                    <div className="row rabbit">
                        <div className="col-md-2">
                            <p><b>Leave ID : </b></p>
                        </div>
                        <div className="col-md-2">
                            <p>{this.state.personProfile.leaveId}</p>
                        </div>
                        <div className="col-md-2">
                            <p><b>Leave Type : </b></p>
                        </div>
                        <div className="col-md-2">
                            <p>{this.state.personProfile.type}</p>
                        </div>
                        <div className="col-md-2">
                            <p><b>Day Requested : </b></p>
                        </div>
                        <div className="col-md-2">
                            <p>{this.state.personProfile.RequestedDateTime}</p>
                        </div>
                    </div>



                    {!this.getDayType(this.state.personProfile.startDateTime, this.state.personProfile.endDateTime) && <div> <div className="row">

                        <div className="col-md-2"><p><b>Day Start : </b></p></div>
                        <div className="col-md-2"><p>{moment(this.state.personProfile.startDateTime).format('DD-MM-YYYY')}</p></div>
                        <div className="col-md-2"><p><b>Time : </b></p></div>
                        <div className="col-md-2"><p>{moment(this.state.personProfile.startDateTime).format('HH:mm')}</p></div>
                        <div className="col-md-2"><p><b>Time : </b></p></div>
                        <div className="col-md-2"><p>{this.state.personProfile.hoursStartDate} Hrs.</p></div>
                    </div>
                        <div className="row">
                            <div className="col-md-2"><p><b>Day End : </b></p></div>
                            <div className="col-md-2"><p>{moment(this.state.personProfile.endDateTime).format('DD-MM-YYYY')}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{moment(this.state.personProfile.endDateTime).format('HH:mm')}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{this.state.personProfile.hoursEndDate} Hrs.</p></div></div>


                    </div>}
                    {this.getDayType(this.state.personProfile.startDateTime, this.state.personProfile.endDateTime) && <div className="row">
                        <div className="col-md-2"><p><b>Date : </b></p></div>
                        <div className="col-md-2"><p>{moment(this.state.personProfile.startDateTime).format('DD-MM-YYYY')}</p></div>
                        <div className="col-md-2"><p><b>Time : </b></p></div>
                        <div className="col-md-2"><p>{moment(this.state.personProfile.startDateTime).format('HH:mm')}</p></div>
                        <div className="col-md-2"><p><b>Time : </b></p></div>
                        <div className="col-md-2"><p>{this.state.personProfile.hoursStartDate} Hrs.</p></div></div>}
                    <div className="row">
                        <div className="col-md-3">
                            <p><b>Note/comments : </b></p>
                        </div>
                        <div className="col-md-9">
                            <p>{this.state.personProfile.comment}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <p><b>File : </b></p>
                        </div>
                        <div className="col-md-11"><img src={pic} width="75" height="52" /></div>
                    </div>


                    <div className="row qqq">
                        <div className="col-md-4 ">
                            <button value="Approve" onClick={this.handleSetTrue}>Approve</button>
                        </div>
                        <div className="col-md-4">
                            <button value="Reject" onClick={this.handleSetFalse}>Reject</button>
                        </div>


                    </div>




                </div>

                <div className="col-md-2">
                </div>
            </div>


        );
    }
}



const mapStateToProps = state => {
    console.log('state', state)

    return {
        profile: state.search


    }

}

const mapDispatchToProps = dispatch => ({
    searchInTable: (search) => dispatch(searchInTable(search))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(SetApproveLeaveForm)
