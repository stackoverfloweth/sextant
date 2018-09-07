import { call, put, takeEvery } from 'redux-saga/effects'
import * as JiraApi from '../api/api_jira'
import * as JiraActions from '../actions/action_jira'

function* fetchJiraBacklog() {
    try {
        var {data} = yield call(JiraApi.fetchBacklog)
        yield put(JiraActions.recievedJiraBacklog(data.issues))
    } catch (exception) {
        console.log(exception);
    }
}

function* fetchJiraSprint() {
    try {
        var {data} = yield call(JiraApi.fetchSprint)
        yield put(JiraActions.recievedJiraSprint(data.issues))
    } catch (exception) {
        console.log(exception);
    }
}

function* fetchJiraUsers() {
    try {
        var {data} = yield call(JiraApi.fetchUsers)
        yield put(JiraActions.recievedJiraUsers(data.users.items))
    } catch (exception) {
        console.log(exception);
    }
}

function* assignJiraTicket(action) {
    console.log(action)
    try {
        var {data} = yield call(JiraApi.updateIssue, action.issueKey, action.issueData)
        yield put(JiraActions.assignTicketResponse(data))
    } catch (exception) {
        console.log(exception);
    }
}

export default [
    takeEvery(JiraActions.JIRA_BACKLOG.REQUEST, fetchJiraBacklog),
    takeEvery(JiraActions.JIRA_SPRINT.REQUEST, fetchJiraSprint),
    takeEvery(JiraActions.JIRA_USERS.REQUEST, fetchJiraUsers),
    takeEvery(JiraActions.JIRA_ASSIGN_TICKET.REQUEST, assignJiraTicket),
]