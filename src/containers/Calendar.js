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
            <Day date={date} onClick={this.handleDateClick} />
        </div>;
    }
    handleDateClick = (date) => {
        if (this.props.eventCurrentlyBeingEdited) {
            this.props.editDueDateOnEvent(date)
        }
    }
    render() {
        return (
            <div className="calendar">
                {this.getCalendarHeader()}
                {this.getCalendarBody()}
                {this.props.calendar.events.map((event) => {
                    return (
                        <div key={event.eventId}>{event.title}</div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    calendar: state.calendar,
    eventCurrentlyBeingEdited: state.eventCurrentlyBeingEdited,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    editDueDateOnEvent: EventActions.editDueDateOnEvent,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)