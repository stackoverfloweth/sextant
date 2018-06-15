import { put, takeEvery } from 'redux-saga/effects'
import * as TeamActions from '../actions/action_team'

function* getTeam(action){
    yield put(TeamActions.fetchTeam())
}

function* recieveTeam(action){
    yield put(TeamActions.recievedTeam(action.team))
}

export default [
    takeEvery(TeamActions.TEAM_FETCH.REQUEST, getTeam),
    takeEvery(TeamActions.TEAM_FETCH.REQUEST, recieveTeam),
]