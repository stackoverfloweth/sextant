import { call, put, takeEvery } from 'redux-saga/effects'
import * as SettingActions from '../actions/action_setting'
import * as SettingsApi from '../api/api_settings'

function* getSettings(action) {
    try {
        const { data } = yield call(SettingsApi.fetchSettings)
        yield put(SettingActions.recievedSettings(data))
    } catch (exception) {
        console.log(exception);
    }
}

export default [
    takeEvery(SettingActions.SETTINGS_FETCH.REQUEST, getSettings),
]