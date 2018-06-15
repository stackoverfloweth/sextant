export const EVENT_EDIT = {
    BEGIN: 'EVENT_EDIT_BEGIN',
    WATCHING: 'EVENT_EDIT_WATCH',
    JIRA: 'EVENT_EDIT_JIRA',
    MEMBER: 'EVENT_EDIT_MEMBER',
    DATE: 'EVENT_EDIT_DATE',
    COMPLETE: 'EVENT_EDIT_COMPLETE',
    CANCEL: 'EVENT_EDIT_CANCEL',
}

export const beginEditingEvent = payload => ({ type: EVENT_EDIT.BEGIN, event: payload })
export const beginWatchingForInput = payload => ({ type: EVENT_EDIT.WATCHING, target: payload })
export const editJiraTicketOnEvent = payload => ({ type: EVENT_EDIT.JIRA, jiraTicket: payload })
export const editMemberOnEvent = payload => ({ type: EVENT_EDIT.MEMBER, member: payload })
export const editDueDateOnEvent = payload => ({ type: EVENT_EDIT.DATE, dueDate: payload })
export const completeEditingEvent = payload => ({ type: EVENT_EDIT.COMPLETE, event: payload })
export const cancelEditingEvent = () => ({ type: EVENT_EDIT.CANCEL })