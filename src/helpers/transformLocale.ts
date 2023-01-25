export const capitalizeCountryFromLocale = (locale: string | undefined) => {
  if (!locale) {
    return ''
  }
  return locale.slice(0, 3) + locale.slice(-2).toUpperCase()
}
