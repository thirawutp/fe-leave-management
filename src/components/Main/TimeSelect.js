import React, { Component } from 'react';
import TimeField from 'react-simple-timefield';


class TimeSelectStart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeStart: '00:00'
        };

        this.onTimeChange = this.onTimeChange.bind(this);
    }

    onTimeChange(timeStart) {
        this.setState({ timeStart });
    }

    render() {
        const { onChange, id } = this.props

        const { timeStart } = this.state;

        return (
            <TimeField value={timeStart}
                onChange={(timeStart) => onChange(id, timeStart)}
                input={<input className='custom-input' />}
            />
        );
    }
}

export default TimeSelectStart;
