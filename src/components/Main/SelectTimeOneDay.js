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
        const { value = '00:00', onChange = f => f, id } = this.props
        const { time } = this.state;

        return (
            <TimeField
                value={time}
                onChange={(time) => onChange(id, time)}
                input={<input className='custom-input' />}
            />
        );
    }
}

export default TimeSelect;
