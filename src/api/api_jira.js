import axios from 'axios'
import {settings} from '../shared/settings'

export const fetchBacklog = () => {
    const url = `https://${settings("jiraUrl")}/rest/api/2/search?jql=filter=${settings("backlogFilterId")}+order+by+rank`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings("basicToken")}` } })
}

export const fetchSprint = () => {
    const url = `https://${settings("jiraUrl")}/rest/api/2/search?jql=filter=${settings("sprintFilterId")}+order+by+duedate`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings("basicToken")}` } })
}

export const fetchUsers = () => {
    const url = `https://${settings("jiraUrl")}/rest/api/2/group?groupname=${settings("groupName")}&expand=users`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings("basicToken")}` } })
}

export const fetchIssue = (issueKey) => {
    const url = `https://${settings("jiraUrl")}/rest/api/2/issue/${issueKey}?expand=renderedFields`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings("basicToken")}` } })
}