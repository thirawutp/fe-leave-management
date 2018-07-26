import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class StartDate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: ''
        };
    }
    handleChange = (date) => {
        let { onChange, id, id2, Calculate, begin, } = this.props
        this.setState({
            startDate: date
        });
        onChange(id, moment(date).format().toString().substring(0, 11));
        // Calculate(date, '');
    }
    render() {
        return (
            <div>
                <DatePicker
                    className="input-date"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showDisabledMonthNavigation
                    dateFormat="DD/MM/YY"
                    placeholderText="  DD/MM/YY"
                    disabledKeyboardNavigation
                />
            </div>
        );
    }
}

export default StartDate;