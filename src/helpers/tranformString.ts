export const removeEmptySpaceAndHighCase = (string: string): string => {
  if (!string) {
    return ''
  }
  return string.toLowerCase().replace(/\s/g, '')
}
