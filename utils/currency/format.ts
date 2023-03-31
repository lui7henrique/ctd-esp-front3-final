export const formatCurrency = (value: number) => {
  const formatted = new Intl.NumberFormat("EN-us", {
    style: "currency",
    currency: "USD",
  }).format(value);

  return formatted;
};
