import axios from 'axios'

export const fetchBacklog = (settings) => {
    const url = `https://${settings.jiraUrl}/rest/api/2/search?jql=filter=${settings.backlogFilterId}+order+by+rank`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings.basicToken}` } })
}

export const fetchSprint = (settings) => {
    const url = `https://${settings.jiraUrl}/rest/api/2/search?jql=filter=${settings.sprintFilterId}+order+by+duedate`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings.basicToken}` } })
}

export const fetchUsers = (settings) => {
    const url = `https://${settings.jiraUrl}/rest/api/2/group?groupname=${settings.groupName}&expand=users`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings.basicToken}` } })
}

export const fetchIssue = (settings, issueKey) => {
    const url = `https://${settings.jiraUrl}/rest/api/2/issue/${issueKey}?expand=renderedFields`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings.basicToken}` } })
}