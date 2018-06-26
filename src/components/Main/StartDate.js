import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class StartDate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: moment()
        };
    }
    handleChange = (date) => {
        console.log(date)
        this.setState({
            startDate: date
        });
    }
    render() {
        return (
            <div>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
            </div>

        );
    }
}

export default StartDate;