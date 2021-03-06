import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router'
class SearchLeaveStatisticsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Save: 'All'

    }

  }
  handleSetValue = (event) => {
    console.log(this.state.Save)
    this.setState({ Save: event.target.value })

  }
  render() {
    const people = [
      {
        staffID: '12345',
        name: 'Sirapob',
        sure: 'Meechoovet',
        position: 'Backend',
        pending: '2',
        approve: '11',
        reject: '2',
        null: ' '
      },
      {
        staffID: '12345',
        name: 'ฐิตินันท์',
        sure: 'ปราชญ์วัฒนกิจ',
        position: 'Frontend',
        pending: '2',
        approve: '7',
        reject: '-',
        null: ' '
      },
      {
        staffID: '12345',
        name: 'ชื่อพนักงาน',
        sure: 'นามสกุลพนักงาน',
        position: 'BA',
        pending: '3',
        approve: '4',
        reject: '5',
        null: ' '
      },
      {
        staffID: '12345',
        name: 'ชื่อพนักงาน',
        sure: 'นามสกุลพนักงาน',
        position: 'QA',
        pending: '2',
        approve: '11',
        reject: '2',
        null: ' '
      }
    ]
    return (
      <div className="root">

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-11">
            <div className="gun">

            </div>




            <div className="row">


              <div className="tk"><p><b>Position : </b></p>
                <select onChange={this.handleSetValue} >

                  <option value="All">All</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="BA">BA</option>
                  <option value="Graphic">Graphic</option>
                  <option value="QA">QA</option>
                </select>
              </div>
            </div>


            <div className="row PTable">
              <div className="col-md-1">
                <th></th>
              </div>

              <div className="col-md-3">
                <th></th>
              </div>
              <div className="col-md-2">
                <th></th>
              </div>
              <div className="col-md-2">
                <th>Pending</th>
              </div>
              <div className="col-md-2">
                <th>Approve</th>
              </div>
              <div className="col-md-2">
                <th>Reject</th>
              </div>

            </div>
            {

              people.filter((people) => {
                if (this.state.Save === 'All') {
                  return true
                }
                return people.position === this.state.Save
              }).map((people) =>
                <div className="row PData">
                  <div className="col-md-1">
                    <td><p>รูป</p></td>
                  </div>
                  <div className="col-md-3">
                    <Link to='/staticlist'>  <div><td>{people.staffID}</td></div></Link>
                    <div><td>{people.name} {people.sure}</td></div>
                  </div>


                  <div className="col-md-2">

                    <div uu><td>{people.position}</td></div>
                  </div>
                  <div className="col-md-2">
                    <td>{people.pending}</td>
                  </div>
                  <div className="col-md-2">
                    <td>{people.approve}</td>
                  </div>
                  <div className="col-md-2">
                    <td>{people.reject}</td>
                  </div>


                </div>
              )
            }

          </div>
        </div>
      </div>

    );
  }
}

export default SearchLeaveStatisticsList;
