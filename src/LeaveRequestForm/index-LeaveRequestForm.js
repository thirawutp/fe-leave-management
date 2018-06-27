import React, { Component } from 'react';
import './App.css';
import Calendar2 from './Calendar2.js';
import StartDate from './StartDate';
import EndDate from './EndDate';
import TimeSelectStart from './TimeSelect.js';
import DateComponent from './DateComponent.js';
import TimeSelect from './SelectTimeOneDay.js';
import TimeSelectEnd from './TimeSelectEnd.js';
import Header from './components/Main/Header.js'
import Sidebar from './components/Main/Sidebar.js'
class LeaveRequestForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            check: false,
            check2: false,
            picture: null,
            comment: '',
            StartHour: 0,
            EndHour: 0,
            OnlyOnedayHour: 0,
            file: null,
        };
    }
    handleText = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleChangeShow = (event) => {
        this.setState({ check2: false })
        if (this.state.check == false) {
            this.setState({ check: true })
        } else {
            this.vsetState({ check: false })
        }
    }

    handleChangeShow2 = (event) => {
        this.setState({ check: false })
        if (this.state.check2 == false) {
            this.setState({ check2: true })
        } else {
            this.vsetState({ check2: false })
        }
    }

    StartHourhandler = (event) => {
        this.setState({ StartHour: event.target.value });
    }

    EndHourhandler = (event) => {
        this.setState({ EndHour: event.target.value });
    }

    OnlyOnedayHourhandler = (event) => {
        this.setState({ OnlyOnedayHour: event.target.value })
    }

    commenthandler = (event) => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = () => {
        window.confirm(
            "คุณแน่ใจที่จะส่งใบลา ?"
        )
    }

    handlefile = (event) => {
        console.log(this.state.file)
        this.setState({ file: event.target.files[0] })
    }




    render() {
        console.log('state', this.state)
        return (
            <div>
                <Header />
            </div>
            <div>
                <Sidebar />
            </div>
            <form className="leave-form" onSubmit={this.handleSubmit}>
                <div className="leave-form">
                    <div className='header'>
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
                    <div className="show-check-form">
                        <div className="show-DayRequested">
                            Day Requested :
          </div>
                        <div className="checkform">
                            <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onChange={this.handleChangeShow} />
                            <label className="form-check-label" for="exampleRadios1">
                                One day
            </label>
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" onChange={this.handleChangeShow2} />
                            <label className="form-check-label" for="exampleRadios2">
                                More than one they
            </label>
                        </div>
                    </div>

                    <div className="row-select-onedate">
                        {this.state.check && <div className="text-Date">
                            Date :
          </div>}
                        <div className="select-onedate">
                            {this.state.check &&
                                <React.Fragment>
                                    <Calendar2 />
                                    <div className="timeselect-oneday">
                                        <div className="text-time">
                                            Time :
                  </div>
                                        <TimeSelect />
                                        <div className="text-time">
                                            Time :
                  </div>
                                        <div className="dropdown-oneday">
                                            <select className="option-time" onChange={this.OnlyOnedayHourhandler}>
                                                <option value={2}>2 hour</option>
                                                <option value={4} >4 hour</option>
                                                <option value={6} >6 hour</option>
                                                <option value={8}>8 hour</option>
                                            </select>

                                        </div>
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                    </div>

                    {this.state.check2 && <div className="row-moreday">
                        <div className="start-date">
                            <div className="text-Date">
                                Date Start :
          </div>
                            <div className="select-startdate">
                                <StartDate />
                            </div>
                            <div className="text-time2">
                                Time :
            </div>
                            <div className="selecttime">
                                <TimeSelectStart />
                            </div>
                            <div className="text-time2">
                                Time :
            </div>

                            <div className="dropdown-custom">
                                <select className="option-time" onChange={this.StartHourhandler}>
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
                                <EndDate />
                            </div>
                            <div className="text-time2">
                                Time :
            </div>
                            <div className="selecttime">
                                <TimeSelectEnd />
                            </div>
                            <div className="text-time2">
                                Time :
            </div>

                            <div className="dropdown-custom">
                                <select className="option-time" onChange={this.EndHourhandler}>
                                    <option value={2}>2 hour</option>
                                    <option value={4}>4 hour</option>
                                    <option value={6}>6 hour</option>
                                    <option value={8}>8 hour</option>
                                </select>

                            </div>
                        </div>




                    </div>}

                    <div className="row-comment">
                        <div className="text-note">
                            Note/comments :
           </div>
                        <div className="text-area">
                            <textarea className="textarea" type="text" value={this.state.comment} onChange={this.commenthandler} />
                        </div>
                    </div>

                    <div className="row-file">
                        <div className="text-file">
                            File :
          </div>
                        <div className="input-file">
                            <input type="file" name="pic" onChange={this.handlefile} />
                        </div>
                    </div>
                    <div className="cover-button">
                        <div className="row-button">
                            <div className="submit-button">
                                <input className="custom-button" type="submit" value="submit" />
                            </div>
                            <div className="cancel-button">
                                <button className="custom-button">cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default LeaveRequestForm;
