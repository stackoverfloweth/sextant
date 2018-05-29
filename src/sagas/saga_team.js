import { put, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions/action_team'

function* postTeamMember(action) {
    try {
        // var payload = axios.call();
        const payload = [
            {
                memberId: Math.floor(Math.random() * 1000),
                firstName: "Vasyl",
                lastName: "Chuy",
                color: "#4e430a"
            }
        ]
        yield put(actions.recievedNewTeamMember(payload))
    } catch (exception) {
        console.log(exception);
    }
}

export default [
    takeEvery(actions.TEAM_ADD_MEMBER.REQUEST, postTeamMember)
]