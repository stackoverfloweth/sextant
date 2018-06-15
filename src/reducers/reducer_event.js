import { EVENT_EDIT } from '../actions/action_event'

export default function (state = null, action) {
    const emptyEvent = {
        watchingForInput: false,
        event: {
            eventId: null,
            jiraTicket: null,
            dueDate: null,
            member: null
        }
    }

    switch (action.type) {
        case EVENT_EDIT.BEGIN:
            return action.event || emptyEvent
        case EVENT_EDIT.WATCHING:
            return {
                ...state,
                watchingForInput: action.target
            }
        case EVENT_EDIT.JIRA:
            return {
                ...state,
                watchingForInput: null,
                event: {
                    ...state.event,
                    jiraTicket: action.jiraTicket
                }
            }
        case EVENT_EDIT.MEMBER:
            return {
                ...state,
                watchingForInput: null,
                event: {
                    ...state.event,
                    member: action.member
                }
            }
        case EVENT_EDIT.DATE:
            return {
                ...state,
                watchingForInput: null,
                event: {
                    ...state.event,
                    dueDate: action.dueDate
                }
            }
        case EVENT_EDIT.COMPLETE:
            return {
                ...state,
                watchingForInput: null
            }
        case EVENT_EDIT.CANCEL:
            return null
        default:
            return state
    }
}
