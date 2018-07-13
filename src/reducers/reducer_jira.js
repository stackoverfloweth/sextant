import { JIRA_BACKLOG, JIRA_USERS, JIRA_SPRINT } from '../actions/action_jira'
import * as _ from 'lodash'
import { Member } from '../entities/member'
import { Ticket } from '../entities/ticket'

export default function (state = {
    backlog: null,
    sprint: [],
    users: null
}, action) {

    switch (action.type) {
        case JIRA_BACKLOG.RESPONSE:
            return {
                ...state,
                backlog: action.backlog.map(x => new Ticket(x))
            }
        case JIRA_SPRINT.RESPONSE:
            return {
                ...state,
                sprint: constructTickets(action.sprint)
            }
        case JIRA_USERS.RESPONSE:
            return {
                ...state,
                users: action.users.map(x => new Member(x))
            }
        default:
            return state
    }
}

function constructTickets(issueData) {
    return _(issueData)
        .filter(x => x.fields.assignee != null)
        .map(x => new Ticket(x))
        .groupBy("fields.assignee.accountId")
        .values()
}