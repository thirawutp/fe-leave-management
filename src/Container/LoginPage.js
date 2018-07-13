import React, { Component } from 'react';
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { login, addHistory, addpudding, addStatistics } from '../action'
import _ from 'lodash'
import moment from 'moment'

const mockResponse = {
    profileObj: {
        email: 'thirawut.p@appman.co.th',
        imageUrl: 'https://lh4.googleusercontent.com/-ya_p50CJcz4/AAAAAAAAAAI/AAAAAAAAAAs/-YR2bLh0QBk/s96-c/photo.jpg',
        name: 'MockFName MockLastName',
    },
    tokenObj: {
        accessToken: 'thisismockaccesstoken',
    }
}

class LoginPage extends Component {
    state = {
        isLogedIn: false
    }

    handleLoginSuccess = (data) => {
        data = mockResponse
        this.props.handleLogin(data)
        //TODO login to server
        axios.get('http://appmanleavemanagement.azurewebsites.net/api/History/History?staffId=00002')
            .then(res => {
                const data = res.data.map(p => {
                    return _.reduce(p, (result, val, key) => {
                        if (key === 'ApprovedBy') {
                            return {
                                ...result,
                                [_.camelCase(key)]: val || '-'
                            }
                        }
                        if (key === 'LeaveId') {
                            return {
                                ...result,
                                rawLeaveId: val,
                                [_.camelCase(key)]: `LEAVE${_.padStart(val, 3, '0')}`
                            }
                        }

                        return {
                            ...result,
                            [_.camelCase(key)]: val
                        }
                    }, {})
                })
                this.props.addHistory(data)

            })
        axios.get("http://appmanleavemanagement.azurewebsites.net/api/RemainingHour/RemaingHour?staffId=00002&year=2018")
            .then(res => {
                this.props.addpudding(res.data)
            })



        axios.get('http://appmanleavemanagement.azurewebsites.net/api/Statistic/GetStatistics')  //SearchStatistics
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
        this.props.router.push('/home')
    }

    handleLoginFailure = () => {
        if (this.state.isLogedIn) {
            this.handleLoginSuccess(mockResponse)
        }
        this.setState({ isLogedIn: true })
        // TODO : handle fail case
    }

    render() {
        console.log(this.props)
        return (
            <div className="App">
                <GoogleLogin
                    clientId="641800244467-7rc34tcaa2bh0mu7i109blv72n8ilnse.apps.googleusercontent.com"
                    hostedDomain="appman.co.th"
                    buttonText="Login"
                    onSuccess={this.handleLoginSuccess}
                    onFailure={this.handleLoginFailure}
                />
            </div>
        );
    }
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
    handleLogin: (profile) => dispatch(login(profile)),
    addHistory: (history) => dispatch(addHistory(history)),

    addpudding: (data) => dispatch(addpudding(data)),

    addStatistics: (statistics) => dispatch(addStatistics(statistics))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginPage)
