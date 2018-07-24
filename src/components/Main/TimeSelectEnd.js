import React from 'react';
import TimeField from 'react-simple-timefield';
import { Component, console } from "./TimeSelect";
export class TimeSelectEnd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeEnd: '00:00'
        };
        this.onTimeChange = this.onTimeChange.bind(this);
    }
    onTimeChange(timeEnd) {
        const { id, onChange } = this.props
        onChange(id, timeEnd)

    }
    render() {

        const { timeEnd } = this.state;
        return (<TimeField value={timeEnd} onChange={this.onTimeChange} input={<input className='custom-input' />} />);
    }
}


export default TimeSelectEnd;