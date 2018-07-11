import React, { Component } from 'react';
import pic from '../../asset/images/Doctorr.jpg';
import axios from 'axios';
import _ from 'lodash'
import moment from 'moment'


class SetApproveLeaveForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [],
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


    getDayType = (param) => {

        if (param == 'One day') {
            return false
        }
        else {
            return true
        }

    }

    componentDidMount() {
        console.log('Didmount')
        axios.get('http://appmanleavemanagement.azurewebsites.net/api/History/Info?leaveId=2')
            .then(res => {
                console.log('-------', res.data)
                this.setState({ person: res.data })

            })

    }
    render() {
        return (
            <div>
                <div className="row Dory">

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
                                <td>{this.state.name}</td>
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
                            <p>{this.state.leaveID}</p>
                        </div>
                        <div className="col-md-2">
                            <p><b>Leave Type : </b></p>
                        </div>
                        <div className="col-md-2">
                            <p>{this.state.leaveType}</p>
                        </div>
                        <div className="col-md-2">
                            <p><b>Day Requested : </b></p>
                        </div>
                        <div className="col-md-2">
                            <p>{this.state.dayType}</p>
                        </div>
                    </div>


                    {this.getDayType(this.state.dayType) && <div> <div className="row">

                        <div className="col-md-2"><p><b>Day Start : </b></p></div>
                        <div className="col-md-2"><p>{this.state.dayStart}</p></div>
                        <div className="col-md-2"><p><b>Time : </b></p></div>
                        <div className="col-md-2"><p>{this.state.timeStart} Hrs.</p></div>
                        <div className="col-md-2"><p><b>Time : </b></p></div>
                        <div className="col-md-2"><p>{this.state.hourStart} Hrs.</p></div>
                    </div>
                        <div className="row">
                            <div className="col-md-2"><p><b>Day End : </b></p></div>
                            <div className="col-md-2"><p>{this.state.dayEnd}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{this.state.timeEnd} Hrs.</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{this.state.hourEnd} Hrs.</p></div></div>


                    </div>}
                    {!this.getDayType(this.state.dayType) && <div className="row">
                        <div className="col-md-2"><p><b>Date : </b></p></div>
                        <div className="col-md-2"><p>{this.state.dayStart}</p></div>
                        <div className="col-md-2"><p><b>Time : </b></p></div>
                        <div className="col-md-2"><p>{this.state.timeStart} Hrs.</p></div>
                        <div className="col-md-2"><p><b>Time : </b></p></div>
                        <div className="col-md-2"><p>{this.state.hourStart} Hrs.</p></div></div>}

                    <div className="row">
                        <div className="col-md-3">
                            <p><b>Note/comments : </b></p>
                        </div>
                        <div className="col-md-9">
                            <p>{this.state.note}</p>
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

export default SetApproveLeaveForm;
