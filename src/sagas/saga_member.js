import { put, takeEvery } from 'redux-saga/effects'
import * as Actions from '../actions/action_member'

function* postTeamMember(action) {
    try {
        // var payload = axios.call();
        if (action.type.includes("ADD")) {
            action.member.memberId = Math.floor(Math.random() * 1000)
            action.member.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            yield put(Actions.recievedNewTeamMember(action.member))
        } else {
            yield put(Actions.recievedUpdatedTeamMember(action.member))
        }
    } catch (exception) {
        console.log(exception);
    }
}

export default [
    takeEvery(Actions.MEMBER_EDIT.COMPLETE, postTeamMember),
]