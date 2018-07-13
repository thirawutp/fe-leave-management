import React, { Component } from 'react';
import '../../App.css';
import Header from './Header.js';
import { Link } from 'react-router';


class NavigationBar extends Component {
    activeClassName(pathname) {
        if(this.props.location.pathname === pathname) {
            return ' buttonchange'
        }
        return ''
    }
    render() {
        console.log('nav props', this.props)
        return (
            <div>
                <ul className='navigationbar-list '>
                    <li className={'navigationbar-item '+ this.activeClassName('/Leave')}>
                        <Link to='/Leave'>leave</Link>
                    </li>
                    <li className={'navigationbar-item'+ this.activeClassName('/History')}>
                        <Link to='/History'>history</Link>
                    </li>
                    <li className={'navigationbar-item'+ this.activeClassName('/SearchStatic')}>
                        <Link to='/SearchStatic'>Statistic</Link>
                    </li>
                    <li className={'navigationbar-item'+ this.activeClassName('/Approve')}>
                        <Link to='/Approve'>Approve</Link>
                    </li>
                    <li className='logoutbutton'>
                        <Link to='/Logout'>Logout</Link>
                    </li>
                </ul>

            </div>
        );
    }

}



export default NavigationBar;

