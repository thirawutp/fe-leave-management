import React, { Component } from 'react';
import pic from '../../asset/images/Doctorr.jpg';
import axios from 'axios';
import _ from 'lodash'
import moment from 'moment'
import { connect } from 'react-redux'
import { addApprove, addStatistics } from '../../action'
import LightboxExample from '../Main/LightboxExample '
import Lightbox from 'react-image-lightbox';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import leftarrow from '../../asset/images/left-arrow.png';


class SetApproveLeaveForm extends Component {
    constructor(props) {
        super(props);
        const LeaveId = parseInt(_.last(window.location.pathname.split('/')))



        const personProfile = _.find(props.profile, item => item.rawLeaveId === LeaveId)
        const staffId = personProfile.staffId

        const personal = _.find(props.info, info => info.staffId === staffId)

        console.log('TANGKAAAA', personProfile, props.profile, LeaveId)
        this.state = {
            person: [],
            personProfile,
            roles: 'HR',
            photoIndex: 0,
            isOpen: false,
            personal

        }


    }
    handleSet = () => {
        //ออกไปหน้าแรก ยังไง?
        console.log('aaa')
    }
    handleSetTrue = () => {
        // this.setState({check : true})
        const id = _.last(window.location.pathname.split('/'))

        if (window.confirm("แน่ใจว่าจะ Approve?")) {
            axios.put(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/Leaves/SetStatus?status=Approved&leaveId=${id}&approverId=00006`, {
                "status": 'Approved',
                "leaveId": parseInt(this.state.personProfile.leaveId.substring(6)),
                "approverId": "00006",
            }, {
                    onUploadProgress: ProgressEvent => {
                        if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                            alert("Approve Successfully")
                            browserHistory.push('/Approve')
                        }
                    }
                })
                .then(res => {
                    console.log('log approve', res);
                    console.log('log approve', res.data);
                })
        }
    }
    handleSetFalse = () => {
        if (window.confirm("แน่ใจว่าจะ Reject?")) {
            const id = _.last(window.location.pathname.split('/'))
            console.log(parseInt(this.state.personProfile.leaveId.substring(6)))
            axios.put(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/Leaves/SetStatus?status=Rejected&leaveId=${id}&approverId=00006`, {
                "status": 'Rejected',
                "leaveId": parseInt(this.state.personProfile.leaveId.substring(6)),
                "approverId": "00006",
            }, {
                    onUploadProgress: ProgressEvent => {
                        if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                            alert("Rejected Successfully")
                            browserHistory.push('/Approve')
                        }
                    }
                })
                .then(res => {
                    console.log('log approve', res);
                    console.log('log approve', res.data);
                })
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



    componentDidMount() {


    }
    render() {
        const { photoIndex, isOpen } = this.state;

        let images = [this.state.personProfile.attachedFile1, this.state.personProfile.attachedFile2, this.state.personProfile.attachedFile3]


        return (
            <div>
                <div className='backbutton'>
            <Link to='/TableLeaveStatisticsDeatils'><button className="back-button"><img src={leftarrow} />Back</button></Link>
          </div>
                <div className="Dory">

                    <div>
                        <div className="col-md-3 approvetopic">
                            <p>Leave Detail</p>
                        </div>

                    </div>
                    <div className="bird">

                        <div className="row Dory">
                            <div className="tknamename">
                                <div className="namename">
                                    <th><b>Name : </b></th>
                                </div>
                                <div className="">
                                    <td>{this.state.personal.firstName}</td>
                                </div>
                            </div>
                            <div className="tklastnametk">
                                <div className="lastnamelastname">
                                    <th><b>Lastname : </b></th>
                                </div>
                                <div className="">
                                    <td>{this.state.personal.lastName}</td>
                                </div>
                            </div>

                        </div>
                        <div className="row Dory">
                            <div className=" staffid1">
                                <th><b>Staff ID : </b></th>
                            </div>
                            <div className="staffid2">
                                <td>{this.state.personal.staffId}</td>
                            </div>
                            <div className="section1">
                                <th><b>Section : </b></th>
                            </div>
                            <div className="section2">
                                <td>{this.state.personal.section}</td>
                            </div>
                            <div className="position1">
                                <th><b>Position : </b></th>
                            </div>
                            <div className="position2">
                                <td>{this.state.personal.position}</td>
                            </div>
                        </div>
                    </div>


                    <div className='tktktkgun'>
                    <div className="row rabbit">
                        <div className="leaveidtk">
                            <p><b>Leave ID : </b></p>
                        </div>
                        <div className="leaveidtk1">
                            <p>{this.state.personProfile.leaveId}</p>
                        </div>
                        <div className="leaveidtk2">
                            <p><b>Leave Type : </b></p>
                        </div>
                        <div className="leaveidtk3">
                            <p>{this.state.personProfile.type}</p>
                        </div>
                        <div className="leaveidtk4">
                            <p><b>Day Requested : </b></p>
                        </div>
                        <div className="leaveidtk5">
                            <p>
                                {moment(this.state.personProfile.requestedDateTime).format('DD-MM-YYYY')}</p>
                        </div>
                    </div>



                    {!this.getDayType(this.state.personProfile.startDateTime, this.state.personProfile.endDateTime) && <div> <div className="row">

                        <div className="leavedidtk6"><p><b>Day Start : </b></p></div>
                        <div className="leavedidtk7"><p>{moment(this.state.personProfile.startDateTime).format('DD-MM-YYYY')}</p></div>
                        <div className="leavedidtk8"><p><b>Time : </b></p></div>
                        <div className="leavedidtk9"><p>{moment(this.state.personProfile.startDateTime).format('HH:mm')}</p></div>
                        <div className="leavedidtk10"><p><b>Time : </b></p></div>
                        <div className="leavedidtk11"><p>{this.state.personProfile.hoursStartDate} Hrs.</p></div>
                    </div>
                        <div className="row">
                            <div className="leavedidtk12"><p><b>Day End : </b></p></div>
                            <div className="leavedidtk13"><p>{moment(this.state.personProfile.endDateTime).format('DD-MM-YYYY')}</p></div>
                            <div className="leavedidtk14"><p><b>Time : </b></p></div>
                            <div className="leavedidtk15"><p>{moment(this.state.personProfile.endDateTime).format('HH:mm')}</p></div>
                            <div className="leavedidtk16"><p><b>Time : </b></p></div>
                            <div className="leavedidtk17"><p>{this.state.personProfile.hoursEndDate} Hrs.</p></div></div>


                    </div>}
                    {this.getDayType(this.state.personProfile.startDateTime, this.state.personProfile.endDateTime) && <div className="row">
                        <div className="leavedidtk18"><p><b>Date : </b></p></div>
                        <div className="leavedidtk19"><p>{moment(this.state.personProfile.startDateTime).format('DD-MM-YYYY')}</p></div>
                        <div className="leavedidtk20"><p><b>Time : </b></p></div>
                        <div className="leavedidtk21"><p>{moment(this.state.personProfile.startDateTime).format('HH:mm')}</p></div>
                        <div className="leavedidtk22"><p><b>Time : </b></p></div>
                        <div className="leavedidtk23"><p>{this.state.personProfile.hoursStartDate} Hrs.</p></div></div>}
                    <div className="row">
                        <div className="notetk">
                            <p><b>Note/comments : </b></p>
                        </div>
                        <div className="notetk1">
                            <p>{this.state.personProfile.comment}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="notetk2">
                            <p><b>File : </b></p>
                        </div>

                        <div className="tkpicture">
                            {this.handleShow(this.state.roles) &&
                                <div className="tklink">
                                    {/* <LightboxExample images={this.state.leaveForm.attachedFile1} /> */}
                                    <div className="mickeymouse">
                                        {this.handleImg(this.state.personProfile.attachedFile1) && <div>
                                            <p>{this.state.personProfile.attachedFileName1.substring(0, 15)}</p>
                                            <p><img src={this.state.personProfile.attachedFile1} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} /></p>
                                        </div>

                                        }
                                        {this.handleImg(this.state.personProfile.attachedFile2) && <div>
                                            <p>{this.state.personProfile.attachedFileName2.substring(0, 15)}</p>
                                            <p><img src={this.state.personProfile.attachedFile2} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} /></p>
                                        </div>

                                        }
                                        {this.handleImg(this.state.personProfile.attachedFile3) && <div>
                                            <p>{this.state.personProfile.attachedFileName3.substring(0, 15)}</p>
                                            <p><img src={this.state.personProfile.attachedFile3} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} /></p>
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
                                </div>}
                            {!this.handleShow(this.state.roles) && <div className="col-md-11">
                                {this.handleImg(this.state.personProfile.attachedFile1) && <div>
                                    <p>{this.state.personProfile.attachedFileName1.substring(0, 15)}</p>
                                    <p><img src={this.state.personProfile.attachedFile1} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} /></p>
                                </div>

                                }
                                {this.handleImg(this.state.personProfile.attachedFile2) && <div>
                                    <p>{this.state.personProfile.attachedFileName2.substring(0, 15)}</p>
                                    <p><img src={this.state.personProfile.attachedFile2} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} /></p>
                                </div>

                                }
                                {this.handleImg(this.state.personProfile.attachedFile3) && <div>
                                    <p>{this.state.personProfile.attachedFileName3.substring(0, 15)}</p>
                                    <p><img src={this.state.personProfile.attachedFile3} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} /></p>
                                </div>

                                }
                            </div>}

                        </div>
                    </div>
                    </div>

                    <div className="row qqq">
                        <div className="buttonapprove">
                            <button value="Approve" onClick={this.handleSetTrue}>Approve</button>
                        </div>
                        <div className="buttonreject">
                            <button value="Reject" onClick={this.handleSetFalse}>Reject</button>
                        </div>


                    </div>




                </div>

                <div className="col-md-2">
                </div>
            </div>


        );
    }
}



const mapStateToProps = state => {
    console.log('state', state)

    return {
        profile: state.approve,
        info: state.statistics,
        number: state.history


    }

}

const mapDispatchToProps = dispatch => ({
    addApprove: (approve) => dispatch(addApprove(approve)),
    addStatistics: (statistics) => dispatch(addStatistics(statistics))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(SetApproveLeaveForm)
