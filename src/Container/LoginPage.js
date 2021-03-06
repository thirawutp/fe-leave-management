import React, { Component } from 'react';
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { login, addHistory, addpudding, addStatistics, searchInTable, addTable, setStaffId, setProfile, setRole } from '../action'
import _ from 'lodash'
import moment from 'moment'
import logologin from '../../src/asset/images/logologin.png';
import googlelogo from '../../src/asset/images/google-logo.png'

const mockResponse = {
    profileObj: {
        email: 'thirawut.p@appman.co.th',
        imageUrl: 'https://lh4.googleusercontent.com/-ya_p50CJcz4/AAAAAAAAAAI/AAAAAAAAAAs/-YR2bLh0QBk/s96-c/photo.jpg',
        name: 'Kendall Jenner',
        section: 'Developer',
        position: 'Frontend',
        StaffID: '0875933814'
    },
    tokenObj: {
        accessToken: 'thisismockaccesstoken',
    }
}

class LoginPage extends Component {
    state = {
        isLogedIn: false
    }

    handleLoginSuccess = async (data = mockResponse) => {
        try {
            const email = data.profileObj.email
            this.props.handleLogin(data)

            if (!_.isNil(email)) {
                const employee = await axios.get(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/Employee/GetEmployeeId?email=${email}`, {
                    headers: {
                        Authorization: 'Bearer 123456'
                    }
                })
                const staffId = employee.data
                if (staffId == '') {
                    this.handleLoginFailure()
                }
                this.props.setStaffId(staffId)
                const preson = await axios.get(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/Employee/Header?email=${email}`, {
                    headers: {
                        Authorization: 'Bearer 123456'
                    }
                })
                this.props.setProfile(preson.data)
                console.log("preson.data", preson.data)
                //const history = await axios.get(https://appmanleavemanagement20180718055046.azurewebsites.net/api/History/History?staffId=${staffId}) //searchHistory
                //const historyMapped = history.data.map(p => {
                //  return _.reduce(p, (result, val, key) => {
                //    if (key === 'ApprovedBy') {
                //      return {
                //        ...result,
                //      [_.camelCase(key)]: val || '-'
                //}
                //}
                // if (key === 'LeaveId') {
                //   return {
                //     ...result,
                //   rawLeaveId: val,
                // [_.camelCase(key)]: LEV${_.padStart(val, 5, '0')}
                //}
                // }
                //return {
                //  ...result,
                //[_.camelCase(key)]: val
                //}
                //}, {})
                //})
                //this.props.addHistory(historyMapped)

                //const searchInTable = await axios.get('https://appmanleavemanagement20180718055046.azurewebsites.net/api/History/Leaves') //searchInTable
                //const searchInTableMapped = searchInTable.data.map(p => {
                //  return _.reduce(p, (result, val, key) => {
                //    if (key === 'ApprovedBy') {
                //      return {
                //        ...result,
                //      [_.camelCase(key)]: val || '-'
                //}
                //}
                //if (key === 'LeaveId') {
                //  return {
                //    ...result,
                //  rawLeaveId: val,
                //[_.camelCase(key)]: LEV${_.padStart(val, 5, '0')}
                //}
                // }
                //return {
                //  ...result,
                //[_.camelCase(key)]: val
                // }
                // }, {})
                // })

                // this.props.searchInTable(searchInTableMapped)

                //const ssearch = await axios.get(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/Leaves/RemainingLeaveInfo?staffId=${staffId}`)
                //this.props.searchInTable(ssearch.data)

                const role = await axios.get(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/Employee/Role?staffId=${staffId}`, {
                    headers: {
                        Authorization: 'Bearer 123456'
                    }
                })
                this.props.setRole(role)
                console.log("dsdsdssdsd", role)
                const tableSearch = await axios.get("https://appmanleavemanagement20180718055046.azurewebsites.net/api/RemainingHour/RemainingHours", {
                    headers: {
                        Authorization: 'Bearer 123456'
                    }
                }) //TableSearch...
                const tableSearchMapped = tableSearch.data.map(p => {
                    return _.reduce(p, (result, val, key) => {
                        return {
                            ...result,
                            [_.camelCase(key)]: val
                        }
                    }, {})
                })
                console.log("tableSearchMapped", tableSearchMapped)
                this.props.addTable(tableSearchMapped)


                // const approveSearch = await axios.get(https://appmanleavemanagement20180718055046.azurewebsites.net/api/Leaves/RemainingLeaveInfo?staffId=${staffId})
                // const approveSearchMapped = approveSearch.data.map(p => {
                //   return _.reduce(p, (result, val, key) => {
                //     if (key === 'ApprovedBy') {
                //       return {
                //         ...result,
                //       [_.camelCase(key)]: val || '-'
                // }
                //}
                //if (key === 'LeaveId') {
                //  return {
                //    ...result,
                //  rawLeaveId: val,
                //[_.camelCase(key)]: LEV${_.padStart(val, 5, '0')}
                //}
                // }

                //return {
                //  ...result,
                //[_.camelCase(key)]: val
                //}
                //}, {})
                // })
                // this.props.addApprove(approveSearchMapped)



                const searchStatistics = await axios.get('https://appmanleavemanagement20180718055046.azurewebsites.net/api/Statistic/GetStatistics', {
                    headers: {
                        Authorization: 'Bearer 123456'
                    }
                })  //SearchStatistics
                const searchStatisticsMapped = searchStatistics.data.map(p => {
                    return _.reduce(p, (result, val, key) => {
                        return {
                            ...result,
                            [_.camelCase(key)]: val
                        }
                    }, {})
                })
                console.log("searchStatisticsMapped", searchStatisticsMapped)
                this.props.addStatistics(searchStatisticsMapped)
                this.props.router.push('/Leave')
            }
        } catch (error) {
            console.log(error);
        }
    }



    handleLoginFailure = () => {
        alert("New employee can't login \n Please contact Human resorce Officer.")
    }

    render() {
        console.log(this.props)
        return (
            <div className="login">
                <img src={logologin} />
                <GoogleLogin
                    clientId="614031307987-bq58dtnv7denm1gqp6vbdgh0cp7dat9v.apps.googleusercontent.com"
                    hostedDomain="appman.co.th"
                    img src={googlelogo}
                    buttonText="Sign in with Google"
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
    setRole: (role) => dispatch(setRole(role)),
    addStatistics: (statistics) => dispatch(addStatistics(statistics)),
    addTable: (table) => dispatch(addTable(table)),
    searchInTable: (search) => dispatch(searchInTable(search)),
    setStaffId: (staffId) => dispatch(setStaffId(staffId)),
    setProfile: (person) => dispatch(setProfile(person))


})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginPage)
//