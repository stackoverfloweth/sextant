import { MEMBER_EDIT } from '../actions/action_member'

export default function (state = null, action) {

    switch (action.type) {
        case MEMBER_EDIT.BEGIN:
            return action.member
        case MEMBER_EDIT.CHANGE:
            return {
                ...state,
                [action.property]: action.value
            }
        case MEMBER_EDIT.CANCEL:
            return null
        case MEMBER_EDIT.COMPLETE:
            return null
        default:
            return state
    }
}
