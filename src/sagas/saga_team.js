import { put, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions/action_team'

function* postTeamMember(action) {
    try {
        // var payload = axios.call();
        if(action.type.includes("ADD")){
            action.member.memberId = Math.floor(Math.random() * 1000)
            action.member.color = '#'+Math.floor(Math.random()*16777215).toString(16);
            yield put(actions.recievedNewTeamMember(action.member))
        }else{
            yield put(actions.recievedUpdatedTeamMember(action.member))
        }
    } catch (exception) {
        console.log(exception);
    }
}

export default [
    takeEvery(actions.TEAM_ADD_MEMBER.REQUEST, postTeamMember),
    takeEvery(actions.TEAM_UPDATE_MEMBER.REQUEST, postTeamMember),
]