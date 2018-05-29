import { CALENDAR_ADD_EVENT } from '../actions/action_calendar'
import moment from 'moment'

export default function (state = buildDefaultCalendar(), action) {
    switch (action.type) {
        case CALENDAR_ADD_EVENT.RESPONSE:
            return { ...state, events: state.events.concat(action.events) }
        default:
            break
    }

    return state
}

function buildDefaultCalendar() {
    return buildCalendar(moment(), moment.duration({ weeks: 2 }));
}

function buildCalendar(startDate, duration) {
    const endDate = startDate.clone().add(duration)

    return {
        startDate: startDate,
        endDate: endDate,
        duration: duration,
        dates: getDates(startDate, endDate),
        events: [],
    }
}

function getDates(startDate, endDate) {
    var dates = [];
    var dateAtIndex = startDate.clone();

    while (dateAtIndex.isBefore(endDate)) {
        dates.push(dateAtIndex.clone());
        dateAtIndex.add(1, 'days');
    }

    return dates;
}