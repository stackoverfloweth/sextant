export const CALENDAR_ADD_EVENT = {
    REQUEST: 'CALENDAR_ADD_EVENT_REQUEST',
    RESPONSE: 'CALENDAR_ADD_EVENT_RESPONSE',
};

export const addNewEvent = () => ({ type: CALENDAR_ADD_EVENT.REQUEST })
export const recievedNewEvent = function (payload) {
    return {
        type: CALENDAR_ADD_EVENT.RESPONSE,
        events: payload
    }
}