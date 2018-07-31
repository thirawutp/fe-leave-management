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

    onChange(id, moment(date).format().toString().substring(0, 11));
    onChange(id2, moment(date).format().toString().substring(0, 11));
  }

  render() {
    return <DatePicker
      className="input-date"
      selected={this.state.startDate}
      onChange={this.handleChange}
      showDisabledMonthNavigation
      dateFormat="DD/MM/YY"
      placeholderText="DD/MM/YY"
      disabledKeyboardNavigation
    />;
  }
}

export default Calendar2