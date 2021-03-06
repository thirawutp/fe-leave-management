import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import _ from 'lodash'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addStatistics } from '../../action'
import user from '../../asset/images/user.png'


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
        axios.get('https://appmanleavemanagement20180718055046.azurewebsites.net/api/Statistic/GetStatistics', {
            headers: {
                Authorization: 'Bearer 123456'
            }
        })  //SearchStatistics
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
                this.props.addStatistics(data)
            })
    }

    render() {
        const { people } = this.props
        console.log("people56665555666", people)
        return (
            <div>
                <div className="tkbubble">
                    <div className='tkstatistic'>

                        <div className="row" >
                            <div className="col-md-11 tktktables">

                                <div className="tkboth"></div>
                                <div className="tktablerow">
                                    <div className="tkselecttype">
                                        <div className="positiontext">
                                            <p><b>Position:</b></p>
                                        </div>
                                        <div className="selecttype">
                                            <select onChange={this.handleSetValue} >

                                                <option value="All">Show All</option>


                                                <option value="Architect">Architect</option>
                                                <option value="BA">BA</option>
                                                <option value="Back-end">Backend</option>
                                                <option value="Co-Founder">Co-Founder</option>
                                                <option value="DSN">DSN</option>
                                                <option value="Front-end">Frontend</option>
                                                <option value="HR">HR</option>
                                                <option value="Manager">Manager</option>
                                                <option value="Mobile">Mobile</option>
                                                <option value="OC">OC</option>
                                                <option value="PM">PM</option>
                                                <option value="PMO">PMO</option>
                                                <option value="QA">QA</option>

                                                <option value="TL">TL</option>
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
                                    <div className="col-md-2 tkpending">
                                        <th>Pending</th>
                                    </div>
                                    <div className="col-md-2 tkapprove">
                                        <th>Approve</th>
                                    </div>
                                    <div className="col-md-2 tkreject">
                                        <th>Reject</th>
                                    </div>

                                </div>

                                <div className='tkkt'>
                                {

                                    people.filter((people) => {
                                        if (this.state.Save === 'All') {
                                            return true
                                        }
                                        return people.department === this.state.Save
                                    }).map((people) =>
                                        <div className="row PPData">
                                            <div className="col-md-1 tkuserpicture">
                                                <img src={user} />
                                            </div>
                                            <div className="col-md-3">
                                                <div className='tktkstaffid'>
                                                    <Link to={`/indexindividualStatistic/${people.staffId}`}><td>{people.staffId}</td></Link>
                                                </div>

                                                <div className='tkusername'>
                                                    <td>{`${people.firstNameEn} ${people.lastNameEn}`}</td>

                                                </div>

                                            </div>


                                            <div className="col-md-2 tkposec">

                                                <div><td>{people.position}</td></div>
                                                <div><td>{people.section}</td></div>

                                            </div>
                                            <div className="col-md-2 tkpendingnum">
                                                <td>{people.pending}</td>
                                            </div>
                                            <div className="col-md-2 tkapprovenum">
                                                <td>{people.approve}</td>
                                            </div>
                                            <div className="col-md-2 tkrejectnum">
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
            </div>

        );
    }
}



const mapStateToProps = state => ({
    people: state.statistics || []
})
const mapDispatchToProps = dispatch => ({
    addStatistics: (statistics) => dispatch(addStatistics(statistics))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchStatistics)
