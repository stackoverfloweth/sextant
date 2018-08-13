export const JIRA_BACKLOG = {
    REQUEST: 'JIRA_BACKLOG_REQUEST',
    RESPONSE: 'JIRA_BACKLOG_RESPONSE',
}

export const JIRA_SPRINT = {
    REQUEST: 'JIRA_SPRINT_REQUEST',
    RESPONSE: 'JIRA_SPRINT_RESPONSE',
}

export const JIRA_USERS = {
    REQUEST: 'JIRA_USERS_REQUEST',
    RESPONSE: 'JIRA_USERS_RESPONSE',
}

export const JIRA_ASSIGN_TICKET = {
    REQUEST: 'JIRA_ASSIGN_TICKET_REQUEST',
    RESPONSE: 'JIRA_ASSIGN_TICKET_RESPONSE',
}

export const fetchJiraBacklog = settings => ({ type: JIRA_BACKLOG.REQUEST, settings: settings })
export const recievedJiraBacklog = payload => ({ type: JIRA_BACKLOG.RESPONSE, backlog: payload })

export const fetchJiraSprint = settings => ({ type: JIRA_SPRINT.REQUEST, settings: settings })
export const recievedJiraSprint = payload => ({ type: JIRA_SPRINT.RESPONSE, sprint: payload })

export const fetchJiraUsers = settings => ({ type: JIRA_USERS.REQUEST, settings: settings })
export const recievedJiraUsers = payload => ({ type: JIRA_USERS.RESPONSE, users: payload })

export const assignTicketAction = payload => ({ type: JIRA_ASSIGN_TICKET.REQUEST, payload })
export const assignTicketResponse = payload => ({ type: JIRA_ASSIGN_TICKET.RESPONSE, payload })