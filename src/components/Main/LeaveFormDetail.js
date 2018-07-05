import React, { Component } from 'react';
import doctor from '../../asset/images/Doctorr.jpg';




class LeaveFormDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leaveID: 'LEAVE672',
            leaveType: 'Sick Leave',
            dayType: 'More than one day',
            dayStart: '01/07/2018',
            dayEnd: '02/07/2018',
            timeStart: '9.00 AM',
            timeEnd: '9.00 AM',
            hourStart: '8',
            hourEnd: '8',
            note: 'ป่วยกายยังพอทน แต่ป่วยเพราะไม่มีใครสักคน มันจะทนยังไง',
            check: ''
        }


    }


    getDayType = (param) => {

        if (param == 'One day') {
            return true
        }
        else {
            return false
        }

    }



    render() {
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
                            <div className="col-md-2"><p>{this.state.timeStart}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{this.state.hourStart}</p></div>
                        </div>
                            <div className="row">
                                <div className="col-md-2"><p><b>Day End : </b></p></div>
                                <div className="col-md-2"><p>{this.state.dayEnd}</p></div>
                                <div className="col-md-2"><p><b>Time : </b></p></div>
                                <div className="col-md-2"><p>{this.state.timeEnd}</p></div>
                                <div className="col-md-2"><p><b>Time : </b></p></div>
                                <div className="col-md-2"><p>{this.state.hourEnd}</p></div></div>


                        </div>}
                        {!this.getDayType(this.state.dayType) && <div className="row">
                            <div className="col-md-2"><p><b>Date : </b></p></div>
                            <div className="col-md-2"><p>{this.state.dayStart}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{this.state.timeStart}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{this.state.hourStart}</p></div></div>}

                        <div className="row">
                            <div className="col-md-2">
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
                            <div className="col-md-11"><img src={doctor} width="75" height="52" /></div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>


                </div>
            </div>
        );
    }
}

export default LeaveFormDetail;
