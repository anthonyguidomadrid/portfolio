export const getTranslationFromString = (string, translations) => {
  const translation = translations?.find(
    (translation) => translation.string === string
  );
  if (!translation) return string;
  return translation.translation;
};
