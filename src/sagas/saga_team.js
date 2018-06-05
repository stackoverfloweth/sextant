import { put, takeEvery } from 'redux-saga/effects'
import * as Actions from '../actions/action_team'

function* getTeam(action){
    yield put(Actions.fetchTeam())
}

function* recieveTeam(action){
    yield put(Actions.recievedTeam(action.team))
}

export default [
    takeEvery(Actions.TEAM_FETCH.REQUEST, getTeam),
    takeEvery(Actions.TEAM_FETCH.REQUEST, recieveTeam),
]