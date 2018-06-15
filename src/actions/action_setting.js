export const SETTINGS = {
    SHOW: 'SETTINGS_SHOW',
    HIDE: 'SETTINGS_HIDE',
    UPDATE: 'SETTINGS_UPDATE',
}

export const SETTINGS_FETCH = {
    REQUEST: 'SETTINGS_FETCH_REQUEST',
    RESPONSE: 'SETTINGS_FETCH_RESPONSE',
}

export const SETTINGS_SAVE = {
    REQUEST: 'SETTINGS_SAVE_REQUEST',
    RESPONSE: 'SETTINGS_SAVE_RESPONSE',
}

export const showSettingsModal = () => ({ type: SETTINGS.SHOW })
export const hideSettingsModal = () => ({ type: SETTINGS.HIDE })
export const updateSettings = () => ({ type: SETTINGS.UPDATE })

export const saveSettings = () => ({ type: SETTINGS_SAVE.REQUEST })
export const finishedSavingSettings = payload => ({ type: SETTINGS_SAVE.RESPONSE })

export const fetchSettings = () => ({ type: SETTINGS_FETCH.REQUEST })
export const recievedSettings = payload => ({ type: SETTINGS_FETCH.RESPONSE, settings: payload })