export const settings = (key) => {
    const settings = localStorage.settings    
        ? JSON.parse(localStorage.settings)
        : {}

    return key 
        ? settings[key]
        : settings
}