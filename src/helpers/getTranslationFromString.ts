import { NormalizedTranslation } from '~types/normalizedContentTypes'

export const getTranslationFromString = (
  string: string | undefined,
  translations: NormalizedTranslation[] | undefined
) => {
  const translation = translations?.find(
    translation => translation.string === string
  )
  if (!translation) return string
  return translation.translation
}
