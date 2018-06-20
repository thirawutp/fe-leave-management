import React from "react";
import "react-dates/initialize";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';



class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            focused: false,
        };
    }

    render() {
        console.log('state', this.state)
        return (
            <SingleDatePicker
                date={this.state.date} // momentPropTypes.momentObj or null
                onDateChange={date => {
                    // console.log(this.state.date.toObject());
                    this.setState({ date })
                }} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={({ focused }) => { this.setState({ focused }) }} // PropTypes.func.isRequired
                id="your_unique_id" // PropTypes.string.isRequired,
            />
        );
    }
}

export default Calendar;
