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
        const { id, onChange, id2, handleMoment } = this.props

        this.setState({
            startDate: date
        });

        onChange(id, moment(date).format().toString().substring(0, 11));
        onChange(id2, date)
    }

    render() {
        console.log(this.props.value)
        return <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat="DD/MM/YY"
        />;
    }
}

export default EndDate