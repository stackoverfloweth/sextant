import { call, put, takeEvery } from 'redux-saga/effects'
import * as JiraApi from '../api/api_jira'
import * as EventActions from '../actions/action_event'

function* fetchIssue(action) {
    try {
        var {data} = yield call(JiraApi.fetchIssue, action.event.key)
        yield put(EventActions.recievedEvent(data))
    } catch (exception) {
        console.log(exception);
    }
}

export default [
    takeEvery(EventActions.EVENT_VIEW.BEGIN, fetchIssue)
]