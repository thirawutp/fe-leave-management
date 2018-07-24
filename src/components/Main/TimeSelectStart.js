import React from 'react';
import TimeField from 'react-simple-timefield';
import { Component, Component, console } from "./TimeSelect";
export class TimeSelectStart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeStart: '00:00'
        };
        this.onTimeChange = this.onTimeChange.bind(this);
    }
    onTimeChange(timeStart) {
        const { id, onChange } = this.props
        onChange(id, timeStart)

    }
    render() {

        const { timeStart } = this.state;
        return (<TimeField value={timeStart} onChange={this.onTimeChange} input={<input className='custom-input' />} />);
    }
}