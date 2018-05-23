import moment from 'moment'

import React from 'react';
import Day from './Day'

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);

        var duration = moment.duration({ weeks: 2 });
        var startDate = moment(new Date(2018, 3, 18));
        var endDate = startDate.clone().add(duration);

        this.state = {
            duration: duration,
            startDate: startDate,
            endDate: endDate,
            dates: []
        }

        this.createDatesList();
    }
    createDatesList = () => {
        var dateAtIndex = this.state.startDate.clone();

        while (dateAtIndex.isBefore(this.state.endDate)) {
            this.state.dates.push(dateAtIndex.clone());
            dateAtIndex.add(1, 'days');
        }
    }
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
                {this.state.dates.map((date, index) => {
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
            <Day date={date} />
        </div>;
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