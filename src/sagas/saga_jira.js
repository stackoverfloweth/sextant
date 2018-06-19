import { call, put, takeEvery } from 'redux-saga/effects'
import * as JiraApi from '../api/api_jira'
import * as JiraActions from '../actions/action_jira'

function* fetchJiraBacklog(action) {
    try {
        var {data} = yield call(JiraApi.fetchBacklog, action.settings)
        yield put(JiraActions.recievedJiraBacklog(data))
    } catch (exception) {
        console.log(exception);
    }
}

function* fetchJiraUsers(action) {
    try {
        var {data} = yield call(JiraApi.fetchUsers, action.settings)
        yield put(JiraActions.recievedJiraUsers(data.users.items))
    } catch (exception) {
        console.log(exception);
    }
}

export default [
    takeEvery(JiraActions.JIRA_BACKLOG.REQUEST, fetchJiraBacklog),
    takeEvery(JiraActions.JIRA_USERS.REQUEST, fetchJiraUsers),
]