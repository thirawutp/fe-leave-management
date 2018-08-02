import React, { Component } from 'react';
import doctor from '../../asset/images/Doctorr.jpg';
import aaa from '../../asset/images/check.png';
import { Link } from "react-router";
import axios from 'axios';
import _ from 'lodash'
import moment from 'moment'
import { connect } from 'react-redux'
import LightboxExample from '../Main/LightboxExample '
import Lightbox from 'react-image-lightbox';
import leftarrow from '../../asset/images/left-arrow.png';


class StatDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [],
            roles: 'HR',
            photoIndex: 0,
            isOpen: false,
            people: '',
            data: '',
        }


    }


    getDayType = (start, end) => {

        if (moment(start).isSame(end, 'days')) {
            return true
        }
        else {
            return
        }

    }

    getType = (start, end) => {


        if (moment(start).isSame(end, 'days')) {
            return 'One day'
        }
        else {
            return 'More than one day'
        }

    }

    handleShow = (roles) => {


        if (roles === 'HR') {
            return true

        }
        else {
            return false
        }

    }

    handleImg = (pic) => {
        if (pic === '') {
            return false
        }
        return true
    }
    handleonClickpic = () => {

        <LightboxExample images={this.state.data.attachedFile} />
        console.log("fdfdfdfd")
    }


    componentDidMount = () => {
        console.log('Didmount')
        const AAA = _.last(window.location.pathname.split('/'))
        console.log("good girl", AAA)
        axios.get(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/History/Info?leaveId=${AAA}`)
            .then(res => {
                console.log('------', res.data)
                this.setState({ data: res.data })

                console.log("goodboyyyy", this.state.data)

            })
    }


    render() {
        console.log('5555555555', this.state.data)
        const { photoIndex, isOpen, data } = this.state;

        let images = [this.state.data.AttachedFile1, this.state.data.AttachedFile2, this.state.data.AttachedFile3]
        return (
            <div className='leavebox'>
                <div className='backbutton'>
                    <Link to='/indexindividualStatistic/:personId'><button className="back-button"><img src={leftarrow} />Back</button></Link>
                </div>

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
                                <p>{`LEV${_.padStart(this.props.params.formId, 5, '0')}`}</p>
                            </div>
                            <div className="col-md-2">
                                <p><b>Leave Type : </b></p>
                            </div>
                            <div className="col-md-2">
                                <p>{this.state.data.Type}</p>
                            </div>
                            <div className="col-md-2">
                                <p><b>Day Requested : </b></p>
                            </div>
                            <div className="col-md-2">
                                <p>{this.getType(this.state.data.StartDateTime, this.state.data.EndDateTime)}</p>
                            </div>
                        </div>



                        {!this.getDayType(this.state.data.StartDateTime, this.state.data.EndDateTime) && <div> <div className="row">

                            <div className="col-md-2"><p><b>Day Start : </b></p></div>
                            <div className="col-md-2"><p>{moment(this.state.data.StartDateTime).format('DD-MM-YYYY')}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{moment(this.state.data.StartDateTime).format('HH:mm')}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{this.state.data.HoursStartDate} Hrs.</p></div>
                        </div>
                            <div className="row">
                                <div className="col-md-2"><p><b>Day End : </b></p></div>
                                <div className="col-md-2"><p>{moment(this.state.data.EndDateTime).format('DD-MM-YYYY')}</p></div>
                                <div className="col-md-2"><p><b>Time : </b></p></div>
                                <div className="col-md-2"><p>{moment(this.state.data.EndDateTime).format('HH:mm')}</p></div>
                                <div className="col-md-2"><p><b>Time : </b></p></div>
                                <div className="col-md-2"><p>{this.state.data.HoursEndDate} Hrs.</p></div></div>


                        </div>}
                        {this.getDayType(this.state.data.StartDateTime, this.state.data.EndDateTime) && <div className="row">
                            <div className="col-md-2"><p><b>Date : </b></p></div>
                            <div className="col-md-2"><p>{moment(this.state.data.StartDateTime).format('DD-MM-YYYY')}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{moment(this.state.data.StartDateTime).format('HH:mm')}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{this.state.data.HoursStartDate} Hrs.</p></div></div>}

                        <div className="row">
                            <div className="col-md-2">
                                <p><b>Note/comments : </b></p>
                            </div>
                            <div className="col-md-9">
                                <p>{this.state.data.Comment}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <p><b>File : </b></p>
                            </div>


                            <div className="tkpicture">

                                <div className="tklink">
                                    {/* <LightboxExample images={this.state.leaveForm.attachedFile1} /> */}
                                    <div className="mickeymouse">
                                        {this.handleImg(this.state.data.AttachedFile1) && <div>
                                            <p>{this.state.data.AttachedFileName1}</p>
                                            <p><img src={this.state.data.AttachedFile1} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} /></p>
                                        </div>

                                        }
                                        {this.handleImg(this.state.data.AttachedFile2) && <div>
                                            <p>{this.state.data.AttachedFileName2}</p>
                                            <p><img src={this.state.data.AttachedFile2} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} /></p>
                                        </div>

                                        }
                                        {this.handleImg(this.state.data.AttachedFile3) && <div>
                                            <p>{this.state.data.AttachedFileName3}</p>
                                            <p><img src={this.state.data.AttachedFile3} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} /></p>
                                        </div>

                                        }

                                    </div>
                                    {isOpen && (
                                        <Lightbox
                                            mainSrc={images[photoIndex]}
                                            nextSrc={images[(photoIndex + 1) % images.length]}
                                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                            onMovePrevRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                                })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + 1) % images.length,
                                                })
                                            }
                                        />
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>


                </div>
            </div>

        );
    }
}


export default StatDetail

