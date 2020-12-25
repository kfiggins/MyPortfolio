export function numberToCurrency(value) {
  if (typeof value !== "number") throw new Error("Must be a number.");
  return `$${value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
