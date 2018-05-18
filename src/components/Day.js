import React from 'react';
import moment from 'moment'

export default class Day extends React.Component {
  getMonthName = (date) => {
    return this.props.date.clone().subtract(1, "month").startOf("month").format('MMMM');
  }
  render() {
    return (
      <div className="calendar-content">
        <div className="month-label">{this.getMonthName(this.props.date)}</div>
        <span className="date-label">{this.props.date.date()}</span>
      </div>
    );
  }
}