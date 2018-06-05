import { put, takeEvery } from 'redux-saga/effects'
import * as Actions from '../actions/action_calendar'

function* postEvent(action) {
    try {
        // var payload = axios.call();
        const payload = [
            {
                eventId: Math.floor(Math.random() * 1000),
                title: `CIHD-${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
                description: "lorem ipsum"
            }
        ]
        yield put(Actions.recievedNewEvent(payload))
    } catch (exception) {
        console.log(exception);
    }
}

export default [
    takeEvery(Actions.CALENDAR_ADD_EVENT.REQUEST, postEvent)
]