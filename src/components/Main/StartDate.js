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
        const { onChange, id } = this.props
        this.setState({
            startDate: date
        });
<<<<<<< HEAD
        onChange(id, date)
=======
        onChange(id, moment(date).format())
>>>>>>> 9baded48165e3a1b32bb1f969a430ebe17b601e8
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