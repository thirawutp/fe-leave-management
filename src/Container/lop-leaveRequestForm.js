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
import lwop from '../../src/asset/images/lwop.png';
import sun from '../asset/images/sun.png'
import money from '../asset/images/money.png'
import '../App.css';
import { connect } from 'react-redux';
import { Redirect, browserHistory } from "react-router";
import { addpudding } from '../action';


const FormHeader = props => {
    return (

        <React.Fragment>


            <div className="show-header">
                Leave without Pay
            </div>
            <div className='header1'>

                <div className='date-header'>
                    Date :
</div>
                <div className="current-date">
                    <DateComponent />
                </div>
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
                                <option value={0}>select hour</option>
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
    const { onChange, value, Calculate, begin, end } = props
    return (
        <div className="row-moreday">
            <div className="start-date">
                <div className="text-Date">
                    Date Start :
          </div>
                <div className="select-startdate">
                    <StartDate onChange={onChange} id='leaveDate' Calculate={Calculate} begin={begin} />
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
                        <option value={0}>select hour</option>
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
                    <EndDate onChange={onChange} id={'leaveDateStop'} value={value} Calculate={Calculate} end={end} />
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
                        <option value={0}>select hour</option>
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


const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        try {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result)
            };
            reader.onerror = function (error) {
                reject(error)
            };
        } catch (error) {
            reject(error)
        }
    })
}
class lwpRequestForm extends Component {

    constructor(props) {
        super(props);
        const { leaveData = {} } = this.props
        this.state = {
            type: "Leave without Pay", // get form props :type
            isOneday: true,
            leaveDate: undefined,
            leaveTime: undefined,
            leaveDateStop: undefined,
            leaveTimeStop: undefined,
            leaveAmount: 0,
            leaveAmountStop: 0,
            len: 0,
            note: '',
            timeleftal: undefined,
            selectedFile: [],
            leaveDateBegin: '',
            leaveDateEnd: '',
            amountLeft: '',
            timeSum: '',
            showSum: '',
            caseID: ''
        };
    }
    componentDidMount() {
        let thisyear = moment().format('YYYY').toString()
        axios.get(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/RemainingHour/RemainingHour?staffId=00006&year=${thisyear}`)
            .then(res => {

                this.setState({ timeSum: res.data.LWPHours })
                this.setState({ showSum: res.data.LWPHours })
                console.log("data in database", res.data.LWPHours)
            })
    }
    handleOneDayQuestion = (isOneday) => {
        this.setState({ isOneday })
        this.setState({ showSum: this.state.timeSum })
        this.setState({
            leaveDate: undefined,
            leaveDateStop: undefined,
            leaveAmountStop: 0,
            leaveAmount: 0,
            leaveTime: undefined,
            leaveTimeStop: undefined
        })
    }
    handleChangeOnedayForm = (id, value, id2) => {

        this.setState({ [id]: value })
        this.setState({
            [id2]: value
        }, this.CalHours1day)
    }

    handleChangeMoreOneDay = (id, value) => {
        this.setState({ [id]: value }, this.CalHours)
    }

    handleChangeComment = (id, value, count) => {

        this.setState({ [id]: value })
        this.setState({ len: count })
    }
    CheckStatus = (id, value) => {
        this.setState({ [id]: value })
    }
    Calculate = (day1, day2) => {
        if (day1 && !day2) {
            this.setState({ leaveDateBegin: day1 })
        }
        else if (!day1 && day2) {
            this.setState({ leaveDateEnd: day2 })
            this.CalHours()
        }
    }
    CalHours = () => {
        if (this.state.leaveDate && this.state.leaveDateStop) {
            const start = this.state.leaveDate.replace('T', '')
            const end = this.state.leaveDateStop.replace('T', '')
            const momentStart = moment(start, 'YYYY-MM-DD')
            const momentEnd = moment(end, 'YYYY-MM-DD')
            var hours = momentEnd.diff(momentStart, 'hours')
            if (hours <= 0) {
                this.setState({
                    showSum: this.state.timeSum,
                    caseID: -1

                })

            }
            else if (this.state.leaveDate && this.state.leaveDateStop && this.state.leaveAmount && this.state.leaveAmountStop) {
                this.setState({
                    amountLeft: hours, caseID: 1
                }, this.CalDayLeft)
            }
        }
    }

    CalHours1day = () => {
        if (this.state.leaveDate && this.state.leaveAmount) {
            let day = parseInt(this.state.timeSum) + parseInt(this.state.leaveAmount)
            this.setState({
                showSum: day
            })

        }
        console.log("log one day", this.state.showSum)
    }
    CalDayLeft = () => {
        if (this.state.leaveDate && this.state.leaveDateStop && this.state.leaveAmount && this.state.leaveAmountStop) {
            let sum = (parseInt(this.state.timeSum) + (8 * (parseInt(this.state.amountLeft) / 24))) + parseInt(this.state.leaveAmount) + parseInt(this.state.leaveAmountStop) + 8
            this.setState({
                showSum: sum,
            })
        }
    }


    fileChangedHandler = (event) => {
        this.setState({ selectedFile: Array.from(event.target.files) }, () => console.log("update file,", this.state.selectedFile))
    }

    handleSubmit = async event => {
        if (window.confirm("Confirm ?")) {
            console.log(this.state.selectedFile)
            if (this.state.selectedFile.length == 1) {
                console.log("do did na1")
                let attachFileBase64 = ''
                attachFileBase64 = await getBase64(this.state.selectedFile[0])
                axios.post('https://appmanleavemanagement20180718055046.azurewebsites.net/api/Leaves/Leave', {
                    "type": "Leave without Pay",
                    "staffId": "00002",
                    "startDateTime": this.state.leaveDate + this.state.leaveTime + ":00",
                    "endDateTime": this.state.leaveDateStop + this.state.leaveTimeStop + ":00",
                    "hoursStartDate": this.state.leaveAmount,
                    "hoursEndDate": this.state.leaveAmountStop,
                    "approvalStatus": "string",
                    "comment": this.state.note,
                    "approvedTime": "2018-07-09T08:42:39.014Z",
                    "approvedBy": "null",
                    "attachedFile1": attachFileBase64,
                    "attachedFile2": '',
                    "attachedFile3": '',
                    "attachedFileName1": this.state.selectedFile[0].name,
                    "attachedFileName2": 'No Image',
                    "attachedFileName3": 'No Image',
                    "requestedDateTime": moment().format().toString(),
                }, {
                        onUploadProgress: ProgressEvent => {
                            if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                                alert("Data has been sent!.");
                                browserHistory.push('/home')
                            }
                            else {
                                alert("waiting...")
                            }

                        }
                    })
                    .then(function (response) {
                        console.log(response);
                    })
            }
            else if (this.state.selectedFile.length == 2) {
                console.log("do did na2")
                let attachFileBase64 = ''
                let attachFileBase64p2 = ''
                attachFileBase64 = await getBase64(this.state.selectedFile[0])
                attachFileBase64p2 = await getBase64(this.state.selectedFile[1])
                axios.post('https://appmanleavemanagement20180718055046.azurewebsites.net/api/Leaves/Leave', {
                    "type": "Leave without Pay",
                    "staffId": "00002",
                    "startDateTime": this.state.leaveDate + this.state.leaveTime + ":00",
                    "endDateTime": this.state.leaveDateStop + this.state.leaveTimeStop + ":00",
                    "hoursStartDate": this.state.leaveAmount,
                    "hoursEndDate": this.state.leaveAmountStop,
                    "approvalStatus": "string",
                    "comment": this.state.note,
                    "approvedTime": "2018-07-09T08:42:39.014Z",
                    "approvedBy": "null",
                    "attachedFile1": attachFileBase64,
                    "attachedFile2": attachFileBase64p2,
                    "attachedFile3": '',
                    "attachedFileName1": this.state.selectedFile[0].name,
                    "attachedFileName2": this.state.selectedFile[1].name,
                    "attachedFileName3": 'No Image',
                    "requestedDateTime": moment().format().toString(),
                }, {
                        onUploadProgress: ProgressEvent => {
                            if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                                alert("Data has been sent!.")
                                browserHistory.push('/home')
                            }
                            else {
                                alert("waiting...")
                            }
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                    })
            }
            else if (this.state.selectedFile.length == 3) {
                console.log("do did na3")
                let attachFileBase64 = ''
                let attachFileBase64p2 = ''
                let attachFileBase64p3 = ''
                attachFileBase64 = await getBase64(this.state.selectedFile[0])
                attachFileBase64p2 = await getBase64(this.state.selectedFile[1])
                attachFileBase64p3 = await getBase64(this.state.selectedFile[2])
                axios.post('https://appmanleavemanagement20180718055046.azurewebsites.net/api/Leaves/Leave', {
                    "type": "Leave without Pay",
                    "staffId": "00002",
                    "startDateTime": this.state.leaveDate + this.state.leaveTime + ":00",
                    "endDateTime": this.state.leaveDateStop + this.state.leaveTimeStop + ":00",
                    "hoursStartDate": this.state.leaveAmount,
                    "hoursEndDate": this.state.leaveAmountStop,
                    "approvalStatus": "string",
                    "comment": this.state.note,
                    "approvedTime": "2018-07-09T08:42:39.014Z",
                    "approvedBy": "null",
                    "attachedFile1": attachFileBase64,
                    "attachedFile2": attachFileBase64p2,
                    "attachedFile3": attachFileBase64p3,
                    "attachedFileName1": this.state.selectedFile[0].name,
                    "attachedFileName2": this.state.selectedFile[1].name,
                    "attachedFileName3": this.state.selectedFile[2].name,
                    "requestedDateTime": moment().format().toString(),
                }, {
                        onUploadProgress: ProgressEvent => {
                            if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                                alert("Data has been sent!.")
                                browserHistory.push('/home')
                            }
                            else {
                                alert("waiting...")
                            }
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                    })
            }
            else {
                console.log("do did na")
                axios.post('https://appmanleavemanagement20180718055046.azurewebsites.net/api/Leaves/Leave', {
                    "type": "Leave without Pay",
                    "staffId": "00002",
                    "startDateTime": this.state.leaveDate + this.state.leaveTime + ":00",
                    "endDateTime": this.state.leaveDateStop + this.state.leaveTimeStop + ":00",
                    "hoursStartDate": this.state.leaveAmount,
                    "hoursEndDate": this.state.leaveAmountStop,
                    "approvalStatus": "string",
                    "comment": this.state.note,
                    "approvedTime": "2018-07-09T08:42:39.014Z",
                    "approvedBy": "null",
                    "attachedFile1": '',
                    "attachedFile2": '',
                    "attachedFile3": '',
                    "attachedFileName1": 'No Image',
                    "attachedFileName2": 'No Image',
                    "attachedFileName3": 'No Image',
                    "requestedDateTime": moment().format().toString(),
                }, {
                        onUploadProgress: ProgressEvent => {
                            if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                                alert("Data has been sent!.")
                                browserHistory.push('/home')
                            }
                            else {
                                alert("waiting...")
                            }
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                    })
            }
        }
    }
    handleCheckSubmit = () => {
        if (this.state.isOneday == true) {
            if (this.state.leaveAmount == 0 || this.state.leaveDate === 'Invalid dat' || !this.state.leaveTime) {
                alert('Incorrect or incomplete information!.')
            }
            else if (this.state.showSum < 0) {
                alert('Overtime!.')
            }
            else if (this.state.selectedFile.length > 3) {
                alert('You can only upload up to 3 images.')
            }
            else {
                console.log("success")
                this.handleSubmit()
            }
        }
        else if (this.state.isOneday == false) {
            if (this.state.leaveAmount == 0 || this.state.leaveDate === 'Invalid dat' || !this.state.leaveTime || this.state.leaveDateStop === 'Invalid dat' || !this.state.leaveTimeStop || this.state.leaveAmountStop == 0 || this.state.caseID <= 0) {
                alert('Incorrect or incomplete information!.')
            }
            else if (this.state.showSum < 0) {
                alert('Overtime!.')
            }
            else if (this.state.selectedFile.length > 3) {
                alert('You can only upload up to 3 images.')
            }
            else {
                this.handleSubmit()
            }
        }
    }

    render() {
        return (
            <div className="leave-form">
                <div className="cover-popup-al">
                    <div className="textpopup">
                    </div>
                    <div className="alpopup">
                        <div className="picture">
                            <img src={lwop} />
                        </div>
                        <div className="object">
                            <div className="row text-cover1 ">
                                <div className="col-md-6">
                                    <p className="text-fill1" >{parseInt(this.state.showSum / 8)}</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="text-under1">Days</p>
                                </div>
                            </div>
                            <div className="row text-cover1">
                                <div>
                                    <p className="text-bottom1">{this.state.showSum % 8} </p>
                                </div>
                                <div className="col-md-6 ">
                                    <p className="text-hour1">Hours</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <FormHeader />
                </div>
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
                    onChange={this.handleChangeMoreOneDay}
                    Calculate={this.Calculate}
                    begin={this.state.leaveDateBegin}
                    end={this.state.leaveDateEnd}
                />}
                <NoteQuestion value={this.state.note} onChange={this.handleChangeComment} textlimit={this.state.len} />
                <div className="row-file">
                    <div className="text-file">
                        File :
          </div>
                    <div className="input-file">
                        <input type="file" onChange={this.fileChangedHandler} size="60MB" required multiple />
                    </div>
                </div>
                <div className="cover-button">
                    <div className="row-button">
                        <div className="submit1-button">
                            <button className="submit-button" onClick={this.handleCheckSubmit}>Send</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    leaveData: state.data
})

export default lwpRequestForm;