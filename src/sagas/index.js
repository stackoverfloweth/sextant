import { all } from 'redux-saga/effects'
import calendarSagas from './saga_calendar'

export default function* () {
    yield all([
        ...calendarSagas,
    ])
}