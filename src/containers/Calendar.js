import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import * as EventActions from '../actions/action_event'

import Day from '../components/Day'

class Calendar extends React.Component {
    getCalendarHeader = () => {
        var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return <div className="row seven-cols calendar-header">
            {daysOfTheWeek.map((day, index) => {
                var classes = "header-content";
                if (index === 0 || index === 6) {
                    classes += " weekend"
                }
                return <div className="header-card col" key={index}><div className={classes}>{day}</div></div>
            })}
        </div>
    }
    getCalendarBody = () => {
        return (
            <div className="row seven-cols calendar-body">
                {this.props.calendar.dates.map((date, index) => {
                    return this.getDateHtml(date, index);
                })}
            </div>
        )
    }
    getDateHtml = (date, index) => {
        var classes = "col calendar-card";

        if (index === 0) {
            classes += " offset-" + date.weekday();
        }

        switch (date.weekday()) {
            case 0:
                classes += " weekend week-start";
                break;
            case 6:
                classes += " weekend";
                break;
            default:
                break;
        }

        return <div key={date.valueOf()} className={classes}>
            <Day date={date} onClick={this.handleDateClick}
                onMouseEnter={this.handleDateMouseEnter}
                onMouseLeave={this.handleDateMouseLeave}
                toolbarEvent={this.props.toolbarEvent}
            />
        </div>;
    }
    handleDateClick = (date) => {
        if (this.props.toolbarEvent) {
            this.props.editDueDateOnToolbarEvent(date)
        }
    }
    render() {
        return (
            <div className="calendar">
                {this.getCalendarHeader()}
                {this.getCalendarBody()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    calendar: state.calendar,
    toolbarEvent: state.event.toolbarEvent,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    editDueDateOnToolbarEvent: EventActions.editDueDateOnToolbarEvent,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)