import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Calendar2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            DatePick: moment()
        };
    }
    handleChange = (date) => {
        console.log(date)
        this.setState({
            DatePick: date
        });
    }
    render() {
        return (
            <div>
                <DatePicker
                    selected={this.state.DatePick}
                    onChange={this.handleChange}

                />
            </div>

        );
    }
}

export default Calendar2;