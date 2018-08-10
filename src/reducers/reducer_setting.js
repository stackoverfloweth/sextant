import { SETTINGS, SETTINGS_SAVE } from '../actions/action_setting'

export default function (state = getDefaultSettings(), action) {
    switch (action.type) {
        case SETTINGS.SHOW:
            return {
                ...state,
                showModal: true
            }
        case SETTINGS.HIDE:
        return {
            ...state,
            showModal: false
        }
        case SETTINGS_SAVE.RESPONSE:
        return state
        default:
            return state
    }
}

function getDefaultSettings() {
    return {
        showModal: false,
        hasFetched: false
    }
}