export const getRandomEnumValue = (anEnum: Record<string, unknown>) => {
  const enumValues = Object.keys(anEnum);
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
};
