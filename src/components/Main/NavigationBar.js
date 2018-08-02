import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import '../../App.css';
import { Link } from 'react-router';
import logout from '../../asset/images/logout.png';
import bell from '../../asset/images/bell6.gif';
import { addApprove } from '../../action'



class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            yaya: ''
        }


    }

    activeClassName(pathname) {
        if (this.props.location.pathname === pathname) {
            return ' buttonchange'
        }
        return ''
    }
    checkStatusRoleApp(role) {
        if (role == 'approver') {
            return true
        }
        else {
            return false
        }
    }
    checkStatusRoleAdmin(role) {
        if (role == 'admin') {
            return true
        }
        else {
            return false
        }

    }
    setNoti = () => {
        console.log("2")
        const { staffId } = this.props
        axios.delete(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/Notification/Notification?staffId=${staffId}`)
            .then(res => {

                this.setState({ data: res.data })

                console.log("nuDolphinnnnnnnn", res.data)

            })
    }

    handleRefresh = () => {
        console.log("handleRefresh")
        this.handleHistory()
        this.setNoti()
        //this.handleApprove()
    }
    handleHistory = () => {
        console.log("1")
        const { staffId } = this.props

        axios.get(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/Notification/Notification?staffId=${staffId}`, {
            headers: {
                Authorization: 'Bearer 123456'
            }
        })
            .then(res => {

                this.setState({ data: res.data })

                console.log("nuLoma", res.data)

            })


    }
    handleApprove = () => {
        console.log("3")
        this.componentDidMount()
    }


    componentDidMount = () => {
        console.log('Didmount')
        const { staffId } = this.props

        axios.get(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/Notification/Notification?staffId=${staffId}`, {
            headers: {
                Authorization: 'Bearer 123456'
            }
        })
            .then(res => {

                this.setState({ data: res.data })

                console.log("nuDolphin", res.data)

            })
    }

    render() {
        console.log("gunngo", this.state.data)
        let { role } = this.props
        console.log('role props', role.data)
        const { people } = this.props

        const sumApprovalStatus = !_.isEmpty(people) && !_.isNil(people) ? people.reduce((acc, curr) => {
            if (curr.approvalStatus === "pending") {
                return acc + 1;
            } else {
                return acc;
            }
        }, 0) : 0
        console.log("acc", sumApprovalStatus)

        return (
            <div>
                <ul className='navigationbar-list '>
                    <li id="pathleave" className={'navigationbar-item' + this.activeClassName('/Leave')} onClick={this.handleRefresh}>
                        <Link to='/Leave'>leave</Link>
                    </li>
                    <li id="pathhistory" className={'navigationbar-item' + this.activeClassName('/History')} onClick={this.handleRefresh}>
                        <Link to='/History'>history</Link>
                        {this.state.data && <div className='tknotis1'> <img src={bell} /></div>}
                    </li>

                    {(this.checkStatusRoleAdmin(role.data)) && <li id="pathsearch" className={'navigationbar-item' + this.activeClassName('/SearchStatic')} onClick={this.handleRefresh}>
                        <Link to='/SearchStatic'>Stat</Link>
                    </li>}
                    {(this.checkStatusRoleApp(role.data) || this.checkStatusRoleAdmin(role.data)) && <li id="pathapprove" className={'navigationbar-item' + this.activeClassName('/Approve')} onClick={this.handleRefresh}>

                        <Link to='/Approve'>Approve</Link>
                        {sumApprovalStatus !== 0 && <div className='tknotis'>
                            {sumApprovalStatus}
                        </div>
                        }
                    </li>}
                    <li className='logoutbutton'>
                        <Link to='/logout'><img src={logout} />Logout</Link>
                    </li>
                </ul>

            </div>
        );
    }

}


const mapStateToProps = state => {
    const { role = '' } = state

    return {
        staffId: state.staffId,
        role: role,
        people: _.get(state, 'approve', []).map(row => {
            return _.reduce(row, (result, val, key) => {
                if (['requestedDateTime', 'approvedTime', 'startDateTime', 'endDateTime'].includes(key)) {
                    return {
                        ...result,
                        [_.camelCase(key)]: moment(val).format('DD-MM-YYYY')
                    }
                }
                return {
                    ...result,
                    [_.camelCase(key)]: val
                }
            }, {})
        })
    }
}
const mapDispatchToProps = dispatch => ({
    addApprove: (approve) => dispatch(addApprove(approve))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavigationBar)

