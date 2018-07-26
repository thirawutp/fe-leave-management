import React from 'react';
import TimeField from 'react-simple-timefield';
import { Component, console } from "./TimeSelect";
import TimeInput from 'react-input-time';

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
        onChange(id, timeEnd.value)

    }
    render() {

        const { timeEnd } = this.state;
        return (
            <TimeInput
                className="input-time"
                placeholder="HH:MM"
                initialTime=""
                onChange={this.onTimeChange}
            />
        );
    }
}


export default TimeSelectEnd;