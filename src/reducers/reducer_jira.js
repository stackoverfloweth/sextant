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
            return calculateMemberPoints({
                ...state,
                sprint: constructTickets(action.sprint)
            })
        case JIRA_USERS.RESPONSE:
            return calculateMemberPoints({
                ...state,
                users: action.users.map(x => new Member(x))
            })
        default:
            return state
    }
}

function calculateMemberPoints(state) {
    if (!state.sprint || !state.users) {
        return state;
    }

    return {
        ...state,
        users: _(state.users)
            .map(user => ({
                ...user,
                storyPoints: _(state.sprint)
                    .filter(issue => issue.assignee === user.emailAddress)
                    .sumBy(s => _.sumBy(s.issues, "storyPoints"))
            }))
            .orderBy("storyPoints")
            .value()
    }
}

function constructTickets(issueData) {
    return _(issueData)
        .filter(x => x.fields.assignee != null)
        .map(x => new Ticket(x))
        .groupBy("assignee.emailAddress")
        .map((issues, assignee) => {
            return {
                assignee,
                issues
            }
        })
        .value()
}