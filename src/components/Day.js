import React from 'react';
import * as _ from 'lodash'

export default class Day extends React.Component {
  getMonthName = (date) => {
    return this.props.date.clone().subtract(1, "month").startOf("month").format('MMMM');
  }
  getEventsHtml() {
    return this.props.events.map(event => {
      if (event === undefined) {
        return <div key={_.uniqueId()} className="issue-skip"></div>
      }
      return (
        <div key={event.id} className={this.getClassNames(event)}
          style={{ backgroundColor: event.color }}
          onMouseEnter={() => this.props.onMouseEnter(event)}
          onMouseLeave={() => this.props.onMouseLeave(event)}
        >{this.getEventDisplay(event)}</div>
      )
    })
  }
  getEventDisplay(event) {
    if (this.props.date.isSame(event.startDate)) {
      return event.key
    }
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
      <div className="calendar-content" onClick={() => this.props.onClick(this.props.date)} style={{ cursor: this.props.eventCurrentlyBeingEdited ? "pointer" : "default" }}>
        <div className="month-label">{this.getMonthName(this.props.date)}</div>
        <span className="date-label">{this.props.date.date()}</span>
        {this.getEventsHtml()}
      </div>
    );
  }
}