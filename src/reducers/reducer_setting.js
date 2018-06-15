import { SETTINGS } from '../actions/action_setting'

export default function (state = {}, action) {
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
        default:
            return state
    }
}
