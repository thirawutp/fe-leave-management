import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import '../../App.css';
import { Link } from 'react-router';
import logout from '../../asset/images/logout.png';
import bell from '../../asset/images/bell6.gif';



class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
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
        const { staffId } = this.props
        axios.delete(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/Notification/Notification?staffId=${staffId}`)
            .then(res => {

                this.setState({ data: res.data })

                console.log("nuDolphinnnnnnnn", res.data)

            })
    }

    checkAcc(status) {
        []

    }

    componentDidMount = () => {
        console.log('Didmount')
        const { staffId } = this.props

        axios.get(`https://appmanleavemanagement20180718055046.azurewebsites.net/api/Notification/Notification?staffId=${staffId}`)
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
            if (curr.approvalStatus === "Pending") {
                return acc + 1;
            } else {
                return acc;
            }
        }, 0) : 0

        return (
            <div>
                <ul className='navigationbar-list '>
                    <li id="pathleave" className={'navigationbar-item' + this.activeClassName('/Leave')}>
                        <Link to='/Leave'>leave</Link>
                    </li>
                    <li id="pathhistory" className={'navigationbar-item' + this.activeClassName('/History')} onClick={this.setNoti}>
                        <Link to='/History'>history</Link>
                        {this.state.data && <div className='tknotis1'> <img src={bell} /></div>}
                    </li>
                    {this.checkStatusRoleAdmin(role.data) && <li id="pathsearch" className={'navigationbar-item' + this.activeClassName('/SearchStatic')}>
                        <Link to='/SearchStatic'>Stat</Link>
                    </li>}
                    {(this.checkStatusRoleApp(role.data) || this.checkStatusRoleAdmin(role.data)) && <li id="pathapprove" className={'navigationbar-item1' + this.activeClassName('/Approve')}>
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

export default connect(mapStateToProps)(NavigationBar)

