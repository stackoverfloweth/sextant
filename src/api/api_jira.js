import axios from 'axios'

export const fetchBacklog = (settings) => {
    const url = `https://${settings.jiraUrl}/rest/api/2/search?jql=filter=12135`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings.basicToken}` } })
}

export const fetchSprint = (settings) => {
    const url = `https://${settings.jiraUrl}/rest/api/2/search?jql=filter=12125`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings.basicToken}` } })
}

export const fetchUsers = (settings) => {
    const url = `https://${settings.jiraUrl}/rest/api/2/group?groupname=Genesys&expand=users`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings.basicToken}` } })
}