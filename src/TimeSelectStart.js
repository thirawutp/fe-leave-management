import React, { Component } from 'react';
import TimeField from 'react-simple-timefield';


class TimeSelectStart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: '12:34'
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

export default TimeSelectStart;
