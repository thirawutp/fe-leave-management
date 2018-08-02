import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import business from 'moment-business';
import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class EndDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        let { id, onChange, id2, Calculate, end } = this.props

        this.setState({
            startDate: date
        });
        end = this.startDate;
        if (!business.isWeekDay(date)) {
            alert("You can choose only weekday \n Please try again.")
            onChange(id, 'Invalid dat');
        }
        else {
            onChange(id, moment(date).format().toString().substring(0, 11));
            // Calculate('', date)
        }
    }

    render() {
        return <DatePicker
            className="input-date"
            selected={this.state.startDate}
            onChange={this.handleChange}
            showDisabledMonthNavigation
            dateFormat="DD/MM/YY"
            placeholderText="  DD/MM/YY"
            disabledKeyboardNavigation
        />;
    }
}

export default EndDate