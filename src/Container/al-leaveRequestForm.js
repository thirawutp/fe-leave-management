import React, { Component } from 'react';
import Calendar2 from '../components/Main/Calendar2';
import StartDate from '../components/Main/StartDate';
import EndDate from '../components/Main/EndDate';
import TimeSelectStart from '../components/Main/TimeSelect';
import DateComponent from '../components/Main/DateComponent';
import TimeSelect from '../components/Main/TimeSelect';
import TimeSelectEnd from '../components/Main/TimeSelectEnd.js';
import axios from 'axios';
import moment from 'moment';
import '../App.css';


const FormHeader = props => {
    return (
        <React.Fragment>
            <div className='header1'>

                <div className='date-header'>
                    Date :
          </div>
                <div className="current-date">
                    <DateComponent />
                </div>
            </div>
            <div className="show-header">
                Leave Request Form
      </div>
        </React.Fragment>
    )
}

const IsOneDayQuestion = props => {
    const { onChange, value } = props
    return (
        <div className="show-check-form">
            <div className="show-DayRequested">
                Day Requested :
      </div>
            <div className="checkform">
                <input type="radio" onChange={() => onChange(true)} checked={value} />
                <label className="form-check-label">
                    One day
            </label>
                <input className="form-check-input" type="radio" onChange={() => onChange(false)} checked={value === false} />
                <label className="form-check-label">
                    More than one day
        </label>
            </div>
        </div>
    )
}

const OnedayForm = props => {
    const { onChange, value } = props
    return (
        <div className="row-select-onedate">
            <div className="text-Date">
                Date :
    </div>
            <div className="select-onedate">
                <React.Fragment>
                    <Calendar2 value={value.leaveDate} onChange={onChange} id={'leaveDate'} id2={'leaveDateStop'} />
                    <div className="timeselect-oneday">
                        <div className="text-time">
                            Time :
          </div>
                        <TimeSelect value={value.leaveTime} onChange={onChange} id={'leaveTime'} id2={'leaveTimeStop'} />
                        <div className="text-time">
                            Time :
          </div>
                        <div className="dropdown-oneday">
                            <select className="option-time" onChange={(e) => onChange('leaveAmount', e.target.value, 'leaveAmountStop')}>
                                <option value={2}>2 hour</option>
                                <option value={4} >4 hour</option>
                                <option value={6} >6 hour</option>
                                <option value={8}>8 hour</option>
                            </select>

                        </div>
                    </div>
                </React.Fragment>
            </div>
        </div>
    )
}

const ManyDayForm = props => {
    const { value, onChange } = props
    return (
        <div className="row-moreday">
            <div className="start-date">
                <div className="text-Date">
                    Date Start :
          </div>
                <div className="select-startdate">
                    <StartDate onChange={onChange} id='leaveDate' />
                </div>
                <div className="text-time2">
                    Time :
            </div>
                <div className="selecttime">
                    <TimeSelectStart onChange={onChange} id='leaveTime' />
                </div>
                <div className="text-time2">
                    Time :
            </div>

                <div className="dropdown-custom">
                    <select className="option-time" onChange={(event) => onChange('leaveAmount', event.target.value)}>
                        <option value={2}>2 hour</option>
                        <option value={4}>4 hour</option>
                        <option value={6}>6 hour</option>
                        <option value={8}>8 hour</option>
                    </select>

                </div>
            </div>

            <div className="row-moreday-end">
                < div className="text-Date">
                    Date End :
            </div>
                <p className="space"> </p>
                <div className="select-startdate">
                    <EndDate onChange={onChange} id={'leaveDateStop'} />
                </div>
                <div className="text-time2">
                    Time :
            </div>
                <div className="selecttime">
                    <TimeSelectEnd onChange={onChange} id={'leaveTimeStop'} />
                </div>
                <div className="text-time2">
                    Time :
            </div>

                <div className="dropdown-custom">
                    <select className="option-time" onChange={(e) => onChange('leaveAmountStop', e.target.value)}>
                        <option value={2}>2 hour</option>
                        <option value={4}>4 hour</option>
                        <option value={6}>6 hour</option>
                        <option value={8}>8 hour</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

const NoteQuestion = props => {
    const { onChange, textlimit } = props
    return (
        <div className="row-comment">
            <div className="inline">
                <div className="text-note">
                    Note/comments :
                </div>
                <div className="text-area">

                    <textarea className="textarea" maxLength="255" type="text" onChange={(e) => onChange('note', e.target.value, e.target.value.length)} />
                </div>

            </div>
            <p className="text-limit">{textlimit}/255</p>

        </div>
    )
}

const FileForm = props => {
    return (
        <div className="row-file">
            <div className="text-file">
                File :
          </div>
            <div className="input-file">
                <input type="file" name="pic" onChange={this.handlefile} />
            </div>
        </div>
    )
}

const ControlBar = props => {
    return <div className="cover-button">
        <div className="row-button">
            <div className="submit-button">
                <input className="custom-button" type="submit" value="submit" />
            </div>
            <div className="cancel-button">
                <button className="custom-button">cancel</button>
            </div>
        </div>
    </div>
}


class alRequestForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: "Annual leave", // get form props :type
            isOneday: undefined,
            leaveDate: undefined,
            leaveTime: undefined,
            leaveDateStop: undefined,
            leaveTimeStop: undefined,
            leaveAmount: 0,
            leaveAmountStop: 0,
            len: 0,
            note: '',
            file: {},
        };
    }


    handleOneDayQuestion = (isOneday) => {
        this.setState({ isOneday })
    }

    handleChangeOnedayForm = (id, value, id2) => {
        console.log(this.state.leaveDate + this.state.leaveTime)
        this.setState({ [id]: value })
        this.setState({ [id2]: value })
    }

    handleChangeMoreOneDay = (id, value) => {
        console.log(this.state.leaveDate + this.state.leaveTime)
        this.setState({ [id]: value })
    }

    handleChangeComment = (id, value, count) => {

        this.setState({ [id]: value })
        this.setState({ len: count })

    }

    handleSubmit = event => {


        console.log(this.state)
        event.preventDefault()
        axios.post('http://appmanleavemanagement.azurewebsites.net/api/Leaves/Leave', {

            "type": this.state.type,
            "staffId": "00002",
            "startDateTime": this.state.leaveDate + this.state.leaveTime + ":00",
            "endDateTime": this.state.leaveDateStop + this.state.leaveTimeStop + ":00",
            "hoursStartDate": this.state.leaveAmount,
            "hoursEndDate": this.state.leaveAmountStop,
            "approvalStatus": "string",
            "comment": this.state.note,
            "approvedTime": "2018-07-09T08:42:39.014Z",
            "approvedBy": "null",
            "attachedFile": "null",
            "requestedDateTime": moment().format().toString()
        })
            .then(function (response) {
                console.log(response);
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="leave-form">
                    <FormHeader />
                    <IsOneDayQuestion onChange={this.handleOneDayQuestion} value={this.state.isOneday} />
                    {this.state.isOneday && <OnedayForm
                        value={{
                            leaveDate: undefined,
                            leaveDateStop: undefined,
                            leaveTime: undefined,
                            leaveTimeStop: undefined,
                            leaveAmount: 0,
                            leaveAmountStop: 0,
                        }}
                        onChange={this.handleChangeOnedayForm}
                    />}
                    {this.state.isOneday === false && <ManyDayForm
                        value={
                            {
                                leaveDate: undefined,
                                leaveDateStop: undefined,
                                leaveTime: undefined,
                                leaveTimeStop: undefined,
                                leaveAmount: 0,
                                leaveAmountStop: 0,
                            }
                        }
                        onChange={this.handleChangeMoreOneDay}
                    />}
                    <NoteQuestion value={this.state.note} onChange={this.handleChangeComment} textlimit={this.state.len} />
                    <FileForm />
                    <ControlBar />
                </div>
            </form>
        );
    }
}
export default alRequestForm;
// asdfghjkl