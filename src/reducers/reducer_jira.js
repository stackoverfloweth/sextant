import { JIRA_BACKLOG, JIRA_USERS, JIRA_SPRINT } from '../actions/action_jira'

export default function (state = {}, action) {

    switch (action.type) {
        case JIRA_BACKLOG.RESPONSE:
        return {
            ...state,
            backlog: action.backlog
        }
        case JIRA_SPRINT.RESPONSE:
        return {
            ...state,
            sprint: action.sprint
        }
        case JIRA_USERS.RESPONSE:
        return {
            ...state,
            users: action.users
        }
        default:
            return state
    }
}