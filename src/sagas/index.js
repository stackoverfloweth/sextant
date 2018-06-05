import { all } from 'redux-saga/effects'
import calendarSagas from './saga_calendar'
import teamSagas from './saga_team'
import memberSagas from './saga_member'

export default function* () {
    yield all([
        ...calendarSagas,
        ...teamSagas,
        ...memberSagas,
    ])
}