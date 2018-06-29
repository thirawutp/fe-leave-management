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
        const { onChange, id } = this.props
        const value = this.state.EndDate
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

export default EndDate;