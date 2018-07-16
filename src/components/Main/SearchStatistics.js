import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import _ from 'lodash'
import { connect } from 'react-redux';
import { Link } from 'react-router';

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








    render() {
        const { people } = this.props
        console.log(people)
        return (
            <div className="tkroot">
                <div className="tkbubble">
                    <div className='tkstatistic'>

                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-11">





                            <div className="tktablerow">
                            <div className="tkselecttype">
                                <div className="positiontext">
                                    <p><b>Position:</b></p>
                                </div>
                                <div className="selecttype">
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
                                        return people.position === this.state.Save
                                    }).map((people) =>
                                        <div className="row PPData">
                                            <div className="col-md-1">
                                                <td><p>รูป</p></td>
                                            </div>
                                            <div className="col-md-3">
                                                <div>
                                                    <Link to='/indexindividualStatistic'><td>{people.staffId}</td></Link>
                                                </div>

                                                <div><td>{people.firstName} {people.lastName}</td></div>

                                            </div>


                                            <div className="col-md-2">

                                                <div><td>{people.position}</td></div>
                                                <div><td>{people.section}</td></div>

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
                </div>
            </div>

        );
    }
}



const mapStateToProps = state => ({
    people: state.statistics || []
})

export default connect(mapStateToProps, {})(SearchStatistics)
