export const formatNumber = (value: number | string) => {
  if (value === null || value === undefined) return "0";
  const rawValue = typeof value === "number" ? value.toString() : value;
  if (!rawValue) return "0";
  const parsedValue = parseInt(rawValue, 10);
  if (Number.isNaN(parsedValue)) return rawValue;
  return rawValue.length >= 9
    ? (parsedValue / 1000000000).toFixed(0) + "B"
    : rawValue.length >= 6
    ? (parsedValue / 1000000).toFixed(0) + "M"
    : rawValue.length >= 4
    ? (parsedValue / 1000).toFixed(0) + "K"
    : rawValue;
};
