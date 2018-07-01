import moment from 'moment'

export default function (state = buildDefaultCalendar(), action) {
    switch (action.type) {
        default:
            break
    }

    return state
}

function buildDefaultCalendar() {
    return buildCalendar(moment('2018-06-27'), moment.duration({ weeks: 2 }));
}

function buildCalendar(startDate, duration) {
    const endDate = startDate.clone().add(duration)

    return {
        startDate: startDate,
        endDate: endDate,
        duration: duration,
        dates: getDates(startDate, endDate),
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