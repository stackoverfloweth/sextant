export const JIRA_BACKLOG = {
    REQUEST: 'JIRA_BACKLOG_REQUEST',
    RESPONSE: 'JIRA_BACKLOG_RESPONSE',
}

export const JIRA_USERS = {
    REQUEST: 'JIRA_USERS_REQUEST',
    RESPONSE: 'JIRA_USERS_RESPONSE',
}

export const fetchJiraBacklog = settings => ({ type: JIRA_BACKLOG.REQUEST, settings: settings })
export const recievedJiraBacklog = payload => ({ type: JIRA_BACKLOG.RESPONSE, backlog: payload })

export const fetchJiraUsers = settings => ({ type: JIRA_USERS.REQUEST, settings: settings })
export const recievedJiraUsers = payload => ({ type: JIRA_USERS.RESPONSE, users: payload })