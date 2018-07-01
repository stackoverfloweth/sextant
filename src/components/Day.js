import React from 'react';

export default class Day extends React.Component {
  getMonthName = (date) => {
    return this.props.date.clone().subtract(1, "month").startOf("month").format('MMMM');
  }
  render() {
    console.log(this.props.date.toString(), this.props.events)
    return (
      <div className="calendar-content" onClick={() => this.props.onClick(this.props.date)}>
        <div className="month-label">{this.getMonthName(this.props.date)}</div>
        <span className="date-label">{this.props.date.date()}</span>
      </div>
    );
  }
}