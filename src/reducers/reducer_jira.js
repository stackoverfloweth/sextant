import { JIRA_BACKLOG, JIRA_USERS, JIRA_SPRINT } from '../actions/action_jira'
import * as _ from 'lodash'
import moment from 'moment'

export default function (state = {
    backlog: null,
    sprint: [],
    users: null
}, action) {

    switch (action.type) {
        case JIRA_BACKLOG.RESPONSE:
            return {
                ...state,
                backlog: action.backlog
            }
        case JIRA_SPRINT.RESPONSE:
            return {
                ...state,
                sprint: organizeSprintStructure(action.sprint)
            }
        case JIRA_USERS.RESPONSE:
            return {
                ...state,
                users: addColorToUserProfiles(action.users)
            }
        default:
            return state
    }
}

function addColorToUserProfiles(users) {
    return users.map(x => {
        x.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return x;
    })
}

function organizeSprintStructure(issueData) {
    return _(issueData)
        .filter(x => x.fields.assignee != null && x.fields.duedate != null)
        .orderBy('fields.duedate')
        .groupBy("fields.assignee.accountId")
        .values()
        .map(issueGroup => {
            var lastIssueEnd;

            return _.map(issueGroup, issue => {
                var endDate = issue.fields.duedate ? moment(issue.fields.duedate) : null
                var startDate = lastIssueEnd ? lastIssueEnd.clone().add(1, 'days') : null

                lastIssueEnd = endDate;

                return {
                    ...issue,
                    startDate,
                    endDate,
                    color: '#' + Math.floor(Math.random() * 16777215).toString(16)
                }
            })
        })
        .value()
}