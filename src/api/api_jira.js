import axios from 'axios'
import {settings} from '../shared/settings'

export const fetchBacklog = () => {
    const endpoint = encodeURIComponent(`search?jql=filter=${settings("backlogFilterId")}`)//+order+by+rank
    const url = `http://stackoverfloweth.com?endpoint=${endpoint}&requestMethod=GET&jiraUrl=${settings("jiraUrl")}&basicToken=${settings("basicToken")}`
    return axios.get(url)
}

export const fetchSprint = () => {
    const endpoint = encodeURIComponent(`search?jql=filter=${settings("sprintFilterId")}`)//+order+by+duedate
    const url = `http://stackoverfloweth.com?endpoint=${endpoint}&requestMethod=GET&jiraUrl=${settings("jiraUrl")}&basicToken=${settings("basicToken")}`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings("basicToken")}` } })
}

export const fetchUsers = () => {
    const endpoint = encodeURIComponent(`group?groupname=${settings("groupName")}&expand=users`)
    const url = `http://stackoverfloweth.com?endpoint=${endpoint}&requestMethod=GET&jiraUrl=${settings("jiraUrl")}&basicToken=${settings("basicToken")}`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings("basicToken")}` } })
}

export const fetchIssue = issueKey => {
    const endpoint = encodeURIComponent(`issue/${issueKey}?expand=renderedFields`)
    const url = `http://stackoverfloweth.com?endpoint=${endpoint}&requestMethod=GET&jiraUrl=${settings("jiraUrl")}&basicToken=${settings("basicToken")}`
    return axios.get(url, { headers: { "Authorization": `Basic ${settings("basicToken")}` } })
}

export const updateIssue = (issueKey, issueData) => {
    const endpoint = `issue/${issueKey}`
    const url = `http://stackoverfloweth.com?endpoint=${endpoint}&requestMethod=GET&jiraUrl=${settings("jiraUrl")}&basicToken=${settings("basicToken")}`
    return axios.post(url, { headers: { "Authorization": `Basic ${settings("basicToken")}` } }, issueData)
}