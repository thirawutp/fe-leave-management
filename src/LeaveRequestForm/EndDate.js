import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class EndDate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            EndDate: moment()
        };
    }
    handleChange = (date) => {
        console.log(date)
        this.setState({
            EndDate: date
        });
    }
    render() {
        return (
            <div>
                <DatePicker
                    selected={this.state.EndDate}
                    onChange={this.handleChange}

                />
            </div>

        );
    }
}

export default EndDate;