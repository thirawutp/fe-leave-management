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
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    const { id, onChange } = this.props

    this.setState({
      startDate: date
    });

    onChange(id, date);
  }

  render() {
    return <DatePicker
      selected={this.state.startDate}
      onChange={this.handleChange}
      dateFormat="DD/MM/YY"
    />;
  }
}

export default Calendar2