import { all } from 'redux-saga/effects'
import calendarSagas from './saga_calendar'
import eventSagas from './saga_event'
import jiraSagas from './saga_jira'

export default function* () {
    yield all([
        ...calendarSagas,
        ...eventSagas,
        ...jiraSagas,
    ])
}