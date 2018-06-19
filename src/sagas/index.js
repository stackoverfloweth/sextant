import { all } from 'redux-saga/effects'
import calendarSagas from './saga_calendar'
import settingSagas from './saga_setting'
import jiraSagas from './saga_jira'

export default function* () {
    yield all([
        ...calendarSagas,
        ...settingSagas,
        ...jiraSagas,
    ])
}