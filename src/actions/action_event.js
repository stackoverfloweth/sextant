export const EVENT_EDIT = {
    BEGIN: 'EVENT_EDIT_BEGIN',
    JIRA: 'EVENT_EDIT_JIRA',
    ASSIGNEE: 'EVENT_EDIT_ASSIGNEE',
    DATE: 'EVENT_EDIT_DATE',
    COMPLETE: 'EVENT_EDIT_COMPLETE',
    CANCEL: 'EVENT_EDIT_CANCEL',
}

export const EVENT_VIEW = {
    BEGIN: 'EVENT_VIEW_BEGIN',
    RECEIVED: 'EVENT_VIEW_RECEIVED',
    COMPLETE: 'EVENT_VIEW_COMPLETE',
}

export const DRAG_TICKET_FROM_BUCKET = 'DRAG_TICKET_FROM_BUCKET'
export const SHOW_DROP_AREA_EVENT = 'SHOW_DROP_AREA_EVENT'


export const beginEditingToolbarEvent = payload => ({ type: EVENT_EDIT.BEGIN, event: payload })
export const editJiraTicketOnToolbarEvent = payload => ({ type: EVENT_EDIT.JIRA, jiraTicket: payload })
export const editAssigneeOnToolbarEvent = payload => ({ type: EVENT_EDIT.ASSIGNEE, assignee: payload })
export const editDueDateOnToolbarEvent = payload => ({ type: EVENT_EDIT.DATE, dueDate: payload })
export const completeEditingToolbarEvent = payload => ({ type: EVENT_EDIT.COMPLETE, event: payload })
export const cancelEditingToolbarEvent = () => ({ type: EVENT_EDIT.CANCEL })

export const viewEvent = (event) => ({ type: EVENT_VIEW.BEGIN, event })
export const recievedEvent = payload => ({ type: EVENT_VIEW.RECEIVED, event: payload })
export const closeEvent = () => ({ type: EVENT_VIEW.COMPLETE })

export const dragTicketFromBucket = (dragging) => ({ type: DRAG_TICKET_FROM_BUCKET, dragging })
export const showDropAreaEvent = (show) => ({ type: SHOW_DROP_AREA_EVENT, show })

