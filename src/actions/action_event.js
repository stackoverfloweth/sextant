export const EVENT_EDIT = {
    BEGIN: 'EVENT_EDIT_BEGIN',
    JIRA: 'EVENT_EDIT_JIRA',
    ASSIGNEE: 'EVENT_EDIT_ASSIGNEE',
    DATE: 'EVENT_EDIT_DATE',
    COMPLETE: 'EVENT_EDIT_COMPLETE',
    CANCEL: 'EVENT_EDIT_CANCEL',
}

export const beginEditingEvent = payload => ({ type: EVENT_EDIT.BEGIN, event: payload })
export const editJiraTicketOnEvent = payload => ({ type: EVENT_EDIT.JIRA, jiraTicket: payload })
export const editAssigneeOnEvent = payload => ({ type: EVENT_EDIT.ASSIGNEE, assignee: payload })
export const editDueDateOnEvent = payload => ({ type: EVENT_EDIT.DATE, dueDate: payload })
export const completeEditingEvent = payload => ({ type: EVENT_EDIT.COMPLETE, event: payload })
export const cancelEditingEvent = () => ({ type: EVENT_EDIT.CANCEL })