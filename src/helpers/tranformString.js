export const removeEmptySpaceAndHighCase = (string) => {
  if (!string) {
    return "";
  }
  return string.toLowerCase().replace(/\s/g, "");
};
