import React, { Component } from 'react';
import TimeField from 'react-simple-timefield';
import { validateTimeAndCursor } from 'react-simple-timefield/dist';


class TimeSelectEnd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeEnd: '00:00'
        };

        this.onTimeChange = this.onTimeChange.bind(this);
    }

    onTimeChange(timeEnd) {
        const { onChange, id } = this.props
        this.setState({ timeEnd });
        onChange(id, timeEnd)

    }


    render() {
        const { onChange, id } = this.props
        const { timeEnd } = this.state;
        const value = ''

        return (
            <TimeField value={value} onChange={(value) => onChange(id, value)}
                input={<input className='custom-input' />}
            />
        );
    }
}

export default TimeSelectEnd;
