export const capitalizeCountryFromLocale = (locale: string | undefined) => {
  if (!locale) {
    return ''
  }
  if (typeof locale === 'string') {
    return locale.slice(0, 3) + locale.slice(-2).toUpperCase()
  }
}
