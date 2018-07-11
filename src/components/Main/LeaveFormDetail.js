import React, { Component } from 'react';
import doctor from '../../asset/images/Doctorr.jpg';
import aaa from '../../asset/images/check.png';
import { Link } from "react-router";
import axios from 'axios';
import _ from 'lodash'
import moment from 'moment'



class LeaveFormDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [],
            roles: 'HR'
        }


    }


    getDayType = (start, end) => {

        if (moment(start).isSame(end, 'days')) {
            return false
        }
        else {
            return true
        }

    }

    getType = (start, end) => {


        if (moment(start).isSame(end, 'days')) {
            return 'One day'
        }
        else {
            return 'More than one day'
        }
    }

    handleShow = (roles) => {


        if (roles === 'HR') {
            <img src={doctor} width="600" height="400" />

        }
        else {
            return ''
        }

    }


    componentDidMount() {
        console.log('Didmount')
        axios.get('http://appmanleavemanagement.azurewebsites.net/api/History/Info?leaveId=33')
            .then(res => {
                console.log('-------', res.data)
                this.setState({ person: res.data })

            })

    }


    render() {
        console.log(this.props)
        return (
            <div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 rabbit">
                        <div className="row">
                            <div className="col-md-10 horse">
                                <p><b>Leave Detail</b></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <p><b>Leave ID : </b></p>
                            </div>
                            <div className="col-md-2">
                                <p>{`LEAVE${_.padStart(this.props.params.formId, 3, '0')}`}</p>
                            </div>
                            <div className="col-md-2">
                                <p><b>Leave Type : </b></p>
                            </div>
                            <div className="col-md-2">
                                <p>{this.state.person.Type}</p>
                            </div>
                            <div className="col-md-2">
                                <p><b>Day Requested : </b></p>
                            </div>
                            <div className="col-md-2">
                                <p>{this.getType(this.state.person.StartDateTime, this.state.person.EndDateTime)}</p>
                            </div>
                        </div>



                        {this.getDayType(this.state.person.StartDateTime, this.state.person.EndDateTime) && <div> <div className="row">

                            <div className="col-md-2"><p><b>Day Start : </b></p></div>
                            <div className="col-md-2"><p>{moment(this.state.person.StartDateTime).format('DD-MM-YYYY')}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{moment(this.state.person.StartDateTime).format('HH:mm')}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{this.state.person.HoursStartDate} Hrs.</p></div>
                        </div>
                            <div className="row">
                                <div className="col-md-2"><p><b>Day End : </b></p></div>
                                <div className="col-md-2"><p>{moment(this.state.person.EndDateTime).format('DD-MM-YYYY')}</p></div>
                                <div className="col-md-2"><p><b>Time : </b></p></div>
                                <div className="col-md-2"><p>{moment(this.state.person.EndDateTime).format('HH:mm')}</p></div>
                                <div className="col-md-2"><p><b>Time : </b></p></div>
                                <div className="col-md-2"><p>{this.state.person.HoursEndDate} Hrs.</p></div></div>


                        </div>}
                        {!this.getDayType(this.state.person.StartDateTime, this.state.person.EndDateTime) && <div className="row">
                            <div className="col-md-2"><p><b>Date : </b></p></div>
                            <div className="col-md-2"><p>{moment(this.state.person.StartDateTime).format('DD-MM-YYYY')}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{moment(this.state.person.StartDateTime).format('HH:mm')}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{this.state.person.HoursStartDate} Hrs.</p></div></div>}

                        <div className="row">
                            <div className="col-md-2">
                                <p><b>Note/comments : </b></p>
                            </div>
                            <div className="col-md-9">
                                <p>{this.state.person.Comment}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <p><b>File : </b></p>
                            </div>
                            <div className="tkpicture">
                                <div className="col-md-11">

                                    <img src={doctor} width="75" height="52" onClick={() => this.handleShow(this.state.roles)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>


                </div>
            </div>
        );
    }
}

export default LeaveFormDetail;

