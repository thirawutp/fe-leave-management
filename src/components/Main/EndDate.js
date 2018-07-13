import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

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
        onChange(id, moment(date).format().toString().substring(0, 11));
        // Calculate('', date)
    }

    render() {
        return <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat="DD/MM/YY"
        />;
    }
}

export default EndDate