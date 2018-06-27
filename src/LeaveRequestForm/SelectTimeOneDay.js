import React, { Component } from 'react';
import TimeField from 'react-simple-timefield';


class TimeSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: '00:00'
        };

        this.onTimeChange = this.onTimeChange.bind(this);
    }

    onTimeChange(time) {
        this.setState({ time });
    }

    render() {
        console.log(this.state)
        const { time } = this.state;

        return (
            <TimeField value={time} onChange={this.onTimeChange}
                input={<input className='custom-input' />}
            />
        );
    }
}

export default TimeSelect;
