import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Calendar2 extends React.Component {
  render() {
    const { value = moment(), onChange = f => f, id } = this.props
    return (
      <DatePicker
        selected={value}
        onChange={(value) => onChange(id, value)}
      />
    );
  }
}

export default Calendar2;