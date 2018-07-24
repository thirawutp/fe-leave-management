import React, { Component } from 'react';
import TimeInput from 'react-input-time';

class TimeSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeStart: '00:00'
        };

        this.onTimeChange = this.onTimeChange.bind(this);
    }

    onTimeChange(timeStart) {
        const { onChange, id, id2 } = this.props
        this.setState({ timeStart });
        onChange(id, timeStart.value.toString())
        onChange(id2, timeStart.value.toString())
        console.log(this.state.timeStart.value)

    }

    render() {


        const { timeStart } = this.state;

        return (
            <TimeInput
                className="input-time"
                initialTime="00:00"
                onChange={this.onTimeChange}
            />
        );
    }
}

export default TimeSelect;
