import { EVENT_EDIT, EVENT_VIEW, DRAG_TICKET_FROM_BUCKET, SHOW_DROP_AREA_EVENT } from '../actions/action_event'
import { Ticket } from '../entities/ticket'

export default function (state = {
    toolbarEvent: null,
    dragTicketFromBucket: false,
    showDropArea: false,
}, action) {
    switch (action.type) {
        case EVENT_EDIT.BEGIN:
            return {
                ...state,
                toolbarEvent: action.event || {
                    eventId: null,
                    jiraTicket: null,
                    dueDate: null,
                    assignee: null
                }
            }
        case EVENT_EDIT.JIRA:
            return {
                ...state,
                toolbarEvent: {
                    ...state.toolbarEvent,
                    jiraTicket: action.jiraTicket
                }
            }
        case EVENT_EDIT.ASSIGNEE:
            return {
                ...state,
                toolbarEvent: {
                    ...state.toolbarEvent,
                    assignee: action.assignee
                }
            }
        case EVENT_EDIT.DATE:
            return {
                ...state,
                toolbarEvent: {
                    ...state.toolbarEvent,
                    dueDate: action.dueDate
                }
            }
        case EVENT_EDIT.COMPLETE:
            return {
                ...state,
                toolbarEvent: null
            }
        case EVENT_EDIT.CANCEL:
            return {
                ...state,
                toolbarEvent: null
            }
        case EVENT_VIEW.BEGIN:
            return {
                ...state,
                openEvent: {
                    isLoading: true,
                    ...action.event
                }
            }
        case EVENT_VIEW.RECEIVED:
            return {
                ...state,
                openEvent: {
                    isLoading: false,
                    ...new Ticket(action.event)
                }
            }
        case EVENT_VIEW.COMPLETE:
            return {
                ...state,
                openEvent: null
            }
        case DRAG_TICKET_FROM_BUCKET:
            return {
                ...state,
                dragTicketFromBucket: action.dragging
            }
        case SHOW_DROP_AREA_EVENT:
            return {
                ...state,
                showDropArea: action.show
            }

        default:
            return state
    }
}
