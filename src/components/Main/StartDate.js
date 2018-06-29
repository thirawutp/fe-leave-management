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
        const { onChange = f => f, id } = this.props
        const value = this.state.startDate
        return (
            <div>
                <DatePicker
                    selected={value}
                    onChange={(value) => onChange(id, value)}
                />
            </div>

        );
    }
}

export default StartDate;