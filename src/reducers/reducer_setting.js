import { SETTINGS, SETTINGS_SAVE, SETTINGS_FETCH } from '../actions/action_setting'

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
        case SETTINGS_FETCH.RESPONSE:
        return {
            ...state,
            hasFetched: true,
            ...action.settings
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