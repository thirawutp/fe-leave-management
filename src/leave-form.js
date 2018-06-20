import React, { Component } from 'react';
import './App.css';
import Calendar2 from './Calendar2.js';
import StartDate from './StartDate';
import EndDate from './EndDate';
import TimeSelect from './TimeSelect.js';
class Leaveform extends Component {

  constructor(props) {
    super(props);

    this.state = {
      check: false,
      check2: false,
      picture: null,
      text: '',
      StartHour: 0,
      EndHour: 0,
      OnlyOnedayHour: 0,
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
  render() {
    console.log('state', this.state)
    return (


      <div className="App height=100%">
        <div>
          <h3 className="leave-form-header">Leave form</h3>
        </div>


        <div className="row">
          <div className="col-md-3">

            ช่องว่าง
          </div>


          <div className="container-fluid col-md-9 text-left Table leave-form-master">
            <p1><br />Day Requested :</p1>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onChange={this.handleChangeShow} />
              <label class="form-check-label" for="exampleRadios1">
                One day
  </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" onChange={this.handleChangeShow2} />
              <label class="form-check-label" for="exampleRadios2">
                More than one they
  </label>
            </div><br />

            {this.state.check2 &&
              <React.Fragment>
                <table className="table InLine">
                  <thead>
                    <tr>
                      <th>Date start</th>
                      <th><StartDate /></th>
                      <th><TimeSelect /></th>
                      <th>
                        Time :
                        <select className="option-time" onChange={this.StartHourhandler}>
                          <option value={2}>2 hour</option>
                          <option value={4}>4 hour</option>
                          <option value={6}>6 hour</option>
                          <option value={8}>8 hour</option>
                        </select>
                      </th>
                    </tr>
                  </thead>
                </table><br />
                <table className="table InLine">
                  <thead>
                    <tr>
                      <th>Date End</th>
                      <th><EndDate /></th>
                      <th><TimeSelect /></th>
                      <th>
                        Time :
                        <select className="option-time" onChange={this.EndHourhandler}>
                          <option value={2}>2 hour</option>
                          <option value={4} >4 hour</option>
                          <option value={6} >6 hour</option>
                          <option value={8}>8 hour</option>
                        </select>
                      </th>
                    </tr>
                  </thead>
                </table>
              </React.Fragment>
            }
            {this.state.check &&
              <React.Fragment>
                <div className="row">
                  <div className="col-md-8">
                    Click here!
                    <Calendar2 />
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
            <div className="input-group textfill">
              <div className="input-group-prepend">
                <span className="input-group-text textfill">Note/Comments</span>
              </div>
              <textarea className="form-control textfill" aria-label="With textarea" value={this.state.text} onChange={this.handleText} ></textarea>
            </div><br />
            <input className="btn-primary" type="submit" value="Submit" />
          </div>
        </div>
      </div>
    );
  }
}
export default Leaveform;
