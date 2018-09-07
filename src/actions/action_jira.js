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

export const fetchJiraBacklog = () => ({ type: JIRA_BACKLOG.REQUEST })
export const recievedJiraBacklog = payload => ({ type: JIRA_BACKLOG.RESPONSE, backlog: payload })

export const fetchJiraSprint = () => ({ type: JIRA_SPRINT.REQUEST })
export const recievedJiraSprint = payload => ({ type: JIRA_SPRINT.RESPONSE, sprint: payload })

export const fetchJiraUsers = () => ({ type: JIRA_USERS.REQUEST })
export const recievedJiraUsers = payload => ({ type: JIRA_USERS.RESPONSE, users: payload })

export const assignTicketAction = ({issueKey, issueData}) => ({ type: JIRA_ASSIGN_TICKET.REQUEST, issueKey, issueData })
export const assignTicketResponse = payload => ({ type: JIRA_ASSIGN_TICKET.RESPONSE, payload })