import React from 'react'

export default class Day extends React.Component {
  getMonthName = (date) => {
    return this.props.date.clone().subtract(1, "month").startOf("month").format('MMMM');
  }
  getClassNames(event) {
    var classes = [
      `issue-${event.id}`
    ]
    if (this.props.date.isSame(event.startDate)) {
      classes.push("start")
    }
    else if (this.props.date.isSame(event.endDate)) {
      classes.push("end")
    }
    if (this.props.hoverEventId === event.id) {
      classes.push("hovering")
    }

    return classes.join(" ")
  }
  render() {
    return (
      <div className="calendar-content" onClick={() => this.props.onClick(this.props.date)} style={{ cursor: this.props.toolbarEvent ? "pointer" : "default" }}>
        <div className="month-label">{this.getMonthName(this.props.date)}</div>
        <span className="date-label">{this.props.date.date()}</span>
      </div>
    );
  }
}