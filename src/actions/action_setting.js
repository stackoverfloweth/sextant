export const SETTINGS = {
    SHOW: 'SETTINGS_SHOW',
    HIDE: 'SETTINGS_HIDE',
}

export const showSettingsModal = () => ({ type: SETTINGS.SHOW })
export const hideSettingsModal = () => ({ type: SETTINGS.HIDE })