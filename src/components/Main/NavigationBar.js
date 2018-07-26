import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';
import '../../App.css';
import { Link } from 'react-router';
import logout from '../../asset/images/logout.png';


class NavigationBar extends Component {
    activeClassName(pathname) {
        if (this.props.location.pathname === pathname) {
            return ' buttonchange'
        }
        return ''
    }
    render() {
        console.log('nav props', this.props)
        return (
            <div>
                <ul className='navigationbar-list '>
                    <li id="pathleave" className={'navigationbar-item' + this.activeClassName('/Leave')}>
                        <Link to='/Leave'>leave</Link>
                    </li>
                    <li id="pathhistory" className={'navigationbar-item' + this.activeClassName('/History')}>
                        <Link to='/History'>history</Link>
                    </li>
                    <li id="pathsearch" className={'navigationbar-item' + this.activeClassName('/SearchStatic')}>
                        <Link to='/SearchStatic'>Stat</Link>
                    </li>
                    <li id="pathapprove" className={'navigationbar-item' + this.activeClassName('/Approve')}>
                        <Link to='/Approve'>Approve</Link>
                        <div className='tknotis'>

                            {

                                this.props.people.reduce((acc, curr) => {
                                    if (curr.approvalStatus === "Pending") {
                                        return acc + 1;
                                    } else {
                                        return acc;
                                    }
                                }, 0)
                            }
                        </div>
                    </li>
                    <li className='logoutbutton'>
                        <Link to='/logout'><img src={logout} />Logout</Link>
                    </li>
                </ul>

            </div>
        );
    }

}


const mapStateToProps = state => {
    console.log(state)
    return {

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

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavigationBar)

