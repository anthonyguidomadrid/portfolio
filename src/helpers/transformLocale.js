export const capitalizeCountryFromLocale = (locale) => {
    if (!locale) {
        return ''
    }
    return locale.slice(0, 3) + locale.slice(-2).toUpperCase()
}