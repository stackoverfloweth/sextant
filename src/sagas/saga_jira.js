import { call, put, takeEvery } from 'redux-saga/effects'
import * as JiraApi from '../api/api_jira'
import * as JiraActions from '../actions/action_jira'
import * as SettingsActions from '../actions/action_setting'

function* fetchJiraBacklog(action) {
    try {
        var {data} = yield call(JiraApi.fetchBacklog, action.settings)
        yield put(JiraActions.recievedJiraBacklog(data.issues))
    } catch (exception) {
        console.log(exception);
    }
}

function* fetchJiraSprint(action) {
    try {
        var {data} = yield call(JiraApi.fetchSprint, action.settings)
        yield put(JiraActions.recievedJiraSprint(data.issues))
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

function* assignJiraTicket(payload) {
    try {
        // TODO: ADD JIRA API REQUEST
        yield put(JiraActions.assignTicketResponse(payload.payload))
    } catch (exception) {
        console.log(exception);
    }
}


export default [
    takeEvery(SettingsActions.SETTINGS_FETCH.RESPONSE, fetchJiraSprint),
    takeEvery(JiraActions.JIRA_BACKLOG.REQUEST, fetchJiraBacklog),
    takeEvery(JiraActions.JIRA_SPRINT.REQUEST, fetchJiraSprint),
    takeEvery(JiraActions.JIRA_USERS.REQUEST, fetchJiraUsers),
    takeEvery(JiraActions.JIRA_ASSIGN_TICKET.REQUEST, assignJiraTicket),
]