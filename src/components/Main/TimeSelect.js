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
        const { onChange, id, id2 } = this.props
        this.setState({ timeStart });
        onChange(id, timeStart)
        onChange(id2, timeStart)

    }

    render() {


        const { timeStart } = this.state;

        return (
            <TimeField value={timeStart}
                onChange={this.onTimeChange}
                input={<input className='custom-input' />}
            />
        );
    }
}

export default TimeSelectStart;
