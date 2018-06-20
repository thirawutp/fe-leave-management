import React, { Component } from 'react';
import TimeField from 'react-simple-timefield';


class TimeSelectEnd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeEnd: '12:34'
        };

        this.onTimeChange = this.onTimeChange.bind(this);
    }

    onTimeChange(time) {
        this.setState({ timeEnd });
    }

    render() {
        console.log(this.state)
        const { timeEnd } = this.state;

        return (
            <TimeField value={timeEnd} onChange={this.onTimeChange}
                input={<input className='custom-input' />}
            />
        );
    }
}

export default TimeSelectEnd;
