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


class LeaveFormDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [],
            roles: 'HR',
            photoIndex: 0,
            isOpen: false,
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



    handleImg = (pic) => {
        if (pic === '') {
            return false
        }
        return true
    }
    handleonClickpic = () => {

        <LightboxExample images={this.props.leaveForm.attachedFile} />
        console.log("fdfdfdfd")
    }


    render() {
        console.log('5555555555', this.props.leaveForm)
        const { photoIndex, isOpen } = this.state;
        let images = [this.props.leaveForm.attachedFile1, this.props.leaveForm.attachedFile2, this.props.leaveForm.attachedFile3]
        return (
            <div className='leavebox'>

                <div className='backbutton'>
                    <Link to='/History'><button className="back-button"><img src={leftarrow} />Back</button></Link>
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
                                <p>{this.props.leaveForm.type}</p>
                            </div>
                            <div className="col-md-2">
                                <p><b>Day Requested : </b></p>
                            </div>
                            <div className="col-md-2">
                                <p>{this.getType(this.props.leaveForm.startDateTime, this.props.leaveForm.endDateTime)}</p>
                            </div>
                        </div>



                        {!this.getDayType(this.props.leaveForm.startDateTime, this.props.leaveForm.endDateTime) && <div> <div className="row">

                            <div className="col-md-2"><p><b>Day Start : </b></p></div>
                            <div className="col-md-2"><p>{moment(this.props.leaveForm.startDateTime).format('DD-MM-YYYY')}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{moment(this.props.leaveForm.startDateTime).format('HH:mm')}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{this.props.leaveForm.hoursStartDate} Hrs.</p></div>
                        </div>
                            <div className="row">
                                <div className="col-md-2"><p><b>Day End : </b></p></div>
                                <div className="col-md-2"><p>{moment(this.props.leaveForm.endDateTime).format('DD-MM-YYYY')}</p></div>
                                <div className="col-md-2"><p><b>Time : </b></p></div>
                                <div className="col-md-2"><p>{moment(this.props.leaveForm.endDateTime).format('HH:mm')}</p></div>
                                <div className="col-md-2"><p><b>Time : </b></p></div>
                                <div className="col-md-2"><p>{this.props.leaveForm.hoursEndDate} Hrs.</p></div></div>


                        </div>}
                        {this.getDayType(this.props.leaveForm.startDateTime, this.props.leaveForm.endDateTime) && <div className="row">
                            <div className="col-md-2"><p><b>Date : </b></p></div>
                            <div className="col-md-2"><p>{moment(this.props.leaveForm.startDateTime).format('DD-MM-YYYY')}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{moment(this.props.leaveForm.startDateTime).format('HH:mm')}</p></div>
                            <div className="col-md-2"><p><b>Time : </b></p></div>
                            <div className="col-md-2"><p>{this.props.leaveForm.hoursStartDate} Hrs.</p></div></div>}

                        <div className="row">
                            <div className="col-md-2">
                                <p><b>Note/comments : </b></p>
                            </div>
                            <div className="col-md-9">
                                <p>{this.props.leaveForm.comment}</p>
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
                                        {this.handleImg(this.props.leaveForm.attachedFile1) && <div>
                                            <p>{this.props.leaveForm.attachedFileName1}</p>
                                            <p><img src={this.props.leaveForm.attachedFile1} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} /></p>
                                        </div>

                                        }
                                        {this.handleImg(this.props.leaveForm.attachedFile2) && <div>
                                            <p>{this.props.leaveForm.attachedFileName2}</p>
                                            <p><img src={this.props.leaveForm.attachedFile2} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} /></p>
                                        </div>

                                        }
                                        {this.handleImg(this.props.leaveForm.attachedFile3) && <div>
                                            <p>{this.props.leaveForm.attachedFileName3}</p>
                                            <p><img src={this.props.leaveForm.attachedFile3} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} /></p>
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

const mapStateToProps = (state, props) => {
    return {
        leaveForm: _.find(state.history, { rawLeaveId: Number(props.params.formId) }) || {}
    }
}

export default connect(
    mapStateToProps,
    {},
)(LeaveFormDetail);

