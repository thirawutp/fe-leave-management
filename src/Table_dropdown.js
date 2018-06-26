import React, { Component } from 'react';

import './App.css';
class Table_dropdown extends Component {
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
    const people = [{
      ID: '1',
      name: 'Putthachart',
      section: 'Developer',
      position: 'Frontend',
      pending: '2',
      approve: '1',
      reject: '-'
    },
    {
      ID: '2',
      name: 'BBB BBB',
      section: 'Developer',
      position: 'Backend',
      pending: '3',
      approve: '1',
      reject: '2'
    },
    {
      ID: '3',
      name: 'CCC CCC',
      section: 'Developer',
      position: 'BA',
      pending: '2',
      approve: '11',
      reject: '2'
    },
    {
      ID: '4',
      name: 'DDD DDD',
      section: 'Developer',
      position: 'Graphic',
      pending: '2',
      approve: '1',
      reject: '-'
    },
    {
      ID: '5',
      name: 'putthachart',
      section: 'Developer',
      position: 'BA',
      pending: '2',
      approve: '6',
      reject: '-'
    },
    {
      ID: '6',
      name: 'FFF FFF',
      section: 'Developer',
      position: 'QA',
      pending: '2',
      approve: '11',
      reject: '1'
    },
    {
      ID: '7',
      name: 'GGG AAA',
      section: 'Developer',
      position: 'Frontend',
      pending: '22',
      approve: '1',
      reject: '5'
    },
    {
      ID: '8',
      name: 'HHH AAA',
      section: 'Developer',
      position: 'QA',
      pending: '12',
      approve: '11',
      reject: '10'
    },
    {
      ID: '9',
      name: 'III AAA',
      section: 'Developer',
      position: 'Backend',
      pending: '11',
      approve: '11',
      reject: '11'
    },
    {
      ID: '1',
      name: 'JJJ AAA',
      section: 'Developer',
      position: 'BA',
      pending: '2',
      approve: '1',
      reject: '2'
    }
    ]

    return (
      <div className = "root">
      <div className='dropdown'>
       <p><b>Position : </b></p><select onChange={this.handleSetValue} >

            <option value="All">All</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="BA">BA</option>
            <option value="Graphic">Graphic</option>
            <option value="QA">QA</option>
          </select>
        </div>
        <div>
          
        <div className = "ft">

          <div className = "row" >
            
         
          </div>
          </div>
        </div>

        <div className="Table">
          <div className="row">
            <div className="col-md-2">
              <th>StaffID</th>
            </div>
            <div className="col-md-3">
              <th>Name</th>
            </div>
            <div className="col-md-2">
              <th>Position</th>
            </div>
            <div className="col-md-2">
              <th>Pending</th>
            </div>
            <div className="col-md-2">
              <th>Approve</th>
            </div>
            <div className="col-md-1">
              <th>Reject</th>
            </div>
          </div>
        </div>
        {

          people.filter((people) => {
            if (this.state.Save === 'All') {
              return true
            }
            return people.position === this.state.Save
          }).map((people, index) =>

            <div className={`Data ${index % 2 === 0 ? 'Dataeven' : 'Dataodd'}`}>
              <div className="row">
                <div className="col-md-2">
                  <td>{people.ID}</td>
                </div>
                <div className="col-md-3">
                  <td>{people.name}</td>
                </div>
                <div className="col-md-2">
                  <td>{people.position}</td>
                </div>

                <div className="col-md-2">
                  <td>{people.pending}</td>
                </div>
                <div className="col-md-2">
                  <td>{people.approve}</td>
                </div>
                <div className="col-md-1">
                  <td>{people.reject}</td>
                </div>


              </div>
            </div>
          )
        }

      </div>

    );
  }
}

export default Table_dropdown;