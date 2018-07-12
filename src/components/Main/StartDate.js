import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import EndDate from './EndDate';

class StartDate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: ''
        };
    }
    handleChange = (date) => {
        const { onChange, id, id2, handleMoment } = this.props
        this.setState({
            startDate: date
        });

        onChange(id, moment(date).format().toString().substring(0, 11))
        onChange(id2, date)

    }
    render() {
        return (
            <div>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    dateFormat="DD/MM/YY"
                />
            </div>
        );
    }
}

export default StartDate;