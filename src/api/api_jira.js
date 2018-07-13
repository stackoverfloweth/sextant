import axios from 'axios'

export const fetchBacklog = (settings) => {
    const url = `https://${settings.jiraUrl}/rest/api/2/search?jql=filter=${settings.backlogFilterId}`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings.basicToken}` } })
}

export const fetchSprint = (settings) => {
    const url = `https://${settings.jiraUrl}/rest/api/2/search?jql=filter=${settings.sprintFilterId}`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings.basicToken}` } })
}

export const fetchUsers = (settings) => {
    const url = `https://${settings.jiraUrl}/rest/api/2/group?groupname=${settings.groupName}&expand=users`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings.basicToken}` } })
}