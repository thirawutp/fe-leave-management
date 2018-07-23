import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Calendar2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    const { id, onChange, id2 } = this.props

    this.setState({
      startDate: date
    });

    console.log('date is ', date)

    onChange(id, moment(date).format().toString().substring(0, 11));
    onChange(id2, moment(date).format().toString().substring(0, 11));
  }

  render() {
    return <DatePicker
      selected={this.state.startDate}
      onChange={this.handleChange}
      minDate={moment()}
      showDisabledMonthNavigation
      dateFormat="DD/MM/YY"
      placeholderText="Click to select a date"
      disabledKeyboardNavigation
    />;
  }
}

export default Calendar2