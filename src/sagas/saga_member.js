import { put, takeEvery } from 'redux-saga/effects'
import * as MemberActions from '../actions/action_member'

function* postTeamMember(action) {
    try {
        // var payload = axios.call();
        if (action.member.memberId == null) {
            action.member.memberId = Math.floor(Math.random() * 1000)
            action.member.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            yield put(MemberActions.recievedNewTeamMember(action.member))
        } else {
            yield put(MemberActions.recievedUpdatedTeamMember(action.member))
        }
    } catch (exception) {
        console.log(exception);
    }
}

export default [
    takeEvery(MemberActions.MEMBER_EDIT.COMPLETE, postTeamMember),
]