import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import _ from 'lodash'

class SearchStatistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Save: 'All',
            people: []

        }

    }
    handleSetValue = (event) => {
        console.log(this.state.Save)
        this.setState({ Save: event.target.value })

    }



    componentDidMount() {
        console.log('Didmount')
        axios.get('http://appmanleavemanagement.azurewebsites.net/api/Statistic/GetStatistics')
            .then(res => {
                console.log('------', res.data)
                const data = res.data.map(p => {
                    return _.reduce(p, (result, val, key) => {

                        return {
                            ...result,
                            [_.camelCase(key)]: val
                        }
                    }, {})
                })
                this.setState({ people: data })
            })
    }



    render() {
        const people = []
        return (
            <div className="tkroot">
            <div className="tkbubble">
                <div className='tkstatistic'>

                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-11">




                            <div className="tkrow ">
                                <div className="col-md-1">
                                    <p><b>Position:</b></p>
                                </div>
                                <div className="col-md-1">
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



                            <div className="row bubble">

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
                                    return people.Position === this.state.Save
                                }).map((people) =>
                                    <div className="row PPData">
                                        <div className="col-md-1">
                                            <td><p>รูป</p></td>
                                        </div>
                                        <div className="col-md-3">
                                            <div>
                                                <td>{people.StaffId}</td>
                                            </div>
                                            <div><td>{people.FirstName} {people.LastName}</td></div>

                                        </div>


                                        <div className="col-md-2">

                                            <div><td>{people.Position}</td></div>
                                            <div><td>{people.Section}</td></div>

                                        </div>
                                        <div className="col-md-2">
                                            <td>{people.Pending}</td>
                                        </div>
                                        <div className="col-md-2">
                                            <td>{people.Approve}</td>
                                        </div>
                                        <div className="col-md-2">
                                            <td>{people.Reject}</td>
                                        </div>



                                    </div>
                                )
                            }
                        </div>


                    </div>
                </div>
            </div>
            </div>

        );
    }
}

export default SearchStatistics;
