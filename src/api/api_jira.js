import axios from 'axios'

export const fetchBacklog = (settings) => {
    const url = `https://${settings.jiraUrl}/rest/api/latest/search?filter=12125`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings.basicToken}` } })
}

export const fetchUsers = (settings) => {
    const url = `https://${settings.jiraUrl}/rest/api/2/group?groupname=Developers&expand=users`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings.basicToken}` } })
}