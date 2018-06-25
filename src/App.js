import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import Header from './Header.js';
import sun from './images/sun.png';
import human from './images/human.png';
import pig from './images/pig.png';


class LeaveForm1 extends Component {
  render() {
    return (


      <div className="App">
        <div>
          <Header />
        </div>
        <div className='sidebar'>
          <Sidebar />
        </div>

        <div className='content'>
          <div className='tableheader'>
            <h2>Select Leave Type</h2>
          </div>
          <div className="button-popup" >
            <div className="block">
              <div className="popup">
                <div className="popup:hover popup2:hover">
                  <div className="picture">
                    <img src={sun} />
                  </div>

                  <div className="text-cover1 row">
                    <div className="col-md-6">
                      <p className="text-fill" >20</p>
                    </div>
                    <div className="col-md-6">
                      <p className="text-under">Days</p>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-bottom">0 Hours</p>
                  </div>
                </div>
              </div>
              <div className="popup">
                <div className="picture">
                  <img src={human} />
                </div>
                <div className="text-cover1 row">
                  <div className="col-md-6">
                    <p className="text-fill" >20</p>
                  </div>
                  <div className="col-md-6">
                    <p className="text-under">Days</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-bottom">0 Hours</p>
                </div>

              </div>

              <div className="popup">
                <div className="picture">
                  <img src={pig} />
                </div>
                <div className="text-cover1 row">
                  <div className="col-md-6">
                    <p className="text-fill" >20</p>
                  </div>
                  <div className="col-md-6">
                    <p className="text-under">Days</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-bottom">0 Hours</p>
                </div>

              </div>
            </div>
          </div>


        </div>

      </div>


    );
  }
}

export default LeaveForm1;
